class Tax {

    icms(price, mva, internal, external, descount=0, shipping=0, ipi=0) {
        
        var price = Number(price)
        var descount = Number(descount)
        var shipping = Number(shipping)
        var mva = Number(mva)
        var internal = Number(internal)
        var external = Number(external)
        var ipi = Number(ipi)

        var priceWithDescounts = price - descount - shipping

        var ipiTax = priceWithDescounts * (ipi / 100)

        const icmsBaseInter = priceWithDescounts

        const icmsInter = icmsBaseInter * (internal/100)

        const icmsBase = priceWithDescounts + ipiTax + ((priceWithDescounts + ipiTax)* (mva/100) )

        const result = ((icmsBase * (external/100)) - icmsInter).toFixed(2)

        return result;

    }


}

module.exports = Tax