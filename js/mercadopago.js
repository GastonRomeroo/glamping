const mp = new MercadoPago('PUBLIC_KEY', {
    locale: 'en-US'
})

const cardForm = mp.cardForm({
    amount: '100.5',
    autoMount: true,
    processingMode: 'aggregator',
    form: {
        id: 'form-checkout',
        cardholderName: {
            id: 'form-checkout__cardholderName',
            placeholder: 'Cardholder name',
        },
        cardholderEmail: {
            id: 'form-checkout__cardholderEmail',
            placeholder: 'Email',
        },
        cardNumber: {
            id: 'form-checkout__cardNumber',
            placeholder: 'Card number',
        },
        expirationDate: {
            id: 'form-checkout__expirationDate',
            placeholder: 'MM/YYYY'
        },
        securityCode: {
            id: 'form-checkout__securityCode',
            placeholder: 'CVV',
        },
        installments: {
            id: 'form-checkout__installments',
            placeholder: 'Total installments'
        },
        identificationType: {
            id: 'form-checkout__identificationType',
            placeholder: 'Document type'
        },
        identificationNumber: {
            id: 'form-checkout__identificationNumber',
            placeholder: 'Document number'
        },
        issuer: {
            id: 'form-checkout__issuer',
            placeholder: 'Issuer'
        }
    },
    callbacks: {
        onFormMounted: error => {
            if (error) return console.warn('Form Mounted handling error: ', error)
            console.log('Form mounted')
        },
        onFormUnmounted: error => {
            if (error) return console.warn('Form Unmounted handling error: ', error)
            console.log('Form unmounted')
        },
        onIdentificationTypesReceived: (error, identificationTypes) => {
            if (error) return console.warn('identificationTypes handling error: ', error)
            console.log('Identification types available: ', identificationTypes)
        },
        onPaymentMethodsReceived: (error, paymentMethods) => {
            if (error) return console.warn('paymentMethods handling error: ', error)
            console.log('Payment Methods available: ', paymentMethods)
        },
        onIssuersReceived: (error, issuers) => {
            if (error) return console.warn('issuers handling error: ', error)
            console.log('Issuers available: ', issuers)
        },
        onInstallmentsReceived: (error, installments) => {
            if (error) return console.warn('installments handling error: ', error)
            console.log('Installments available: ', installments)
        },
        onCardTokenReceived: (error, token) => {
            if (error) return console.warn('Token handling error: ', error)
            console.log('Token available: ', token)
        },
        onSubmit: (event) => {
            event.preventDefault();
            const cardData = cardForm.getCardFormData();
            console.log('CardForm data available: ', cardData)
        },
        onFetching:(resource) => {
            console.log('Fetching resource: ', resource)

            // Animate progress bar
            const progressBar = document.querySelector('.progress-bar')
            progressBar.removeAttribute('value')

            return () => {
                progressBar.setAttribute('value', '0')
            }
        },
        onError: (error, event) => {
            console.log(event, error);
        },
        onValidityChange: (error, field) => {
            if (error) return error.forEach(e => console.log(`${field}: ${e.message}`));
            console.log(`${field} is valid`);
        },
        onReady: () => {
            console.log("CardForm ready");
        }
    }
})