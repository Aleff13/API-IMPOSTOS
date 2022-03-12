
class Tax {

    constructor(price, internal, external, mva){

        this.price = price;
        this.internal = internal;
        this.external = external;
        this.mva = mva;

    }

    icms() {
        
        let price = Number(this.price.value)
        // let descount = Number(indescount.value)
        // let shipping = Number(inshipping.value)
        let mva = Number(this.mva.value)
        let internal = Number(this.internal.value)
        let external = Number(this.external.value)
        // let ipi = Number(inIpi.value)

        let priceWithDescounts = price - descount - shipping
        let ipiTax = priceWithDescounts * (ipi / 100)

        const icmsBaseInter = priceWithDescounts

        const icmsInter = icmsBaseInter * (internal/100)

        const icmsBase = priceWithDescounts + ipiTax + ((priceWithDescounts + ipiTax)* (mva/100) )

        const result = ((icmsBase * (external/100)) - icmsInter).toFixed(2)

        return result;

    }

}

module.exports = Tax