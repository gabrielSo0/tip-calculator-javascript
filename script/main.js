function TipCalculator() {
    const billInput = document.querySelector("#bill-input");
    const tipInput = document.querySelector("#tip-input");
    const tipAmountInput = document.querySelector("#tipAmount-input");
    const totalBillWithTip = document.querySelector("#billWithTip-input");
    const percentageMeasuring = document.getElementsByTagName("span")[0];

    const getPercentageTip = function() {
        return parseFloat(tipInput.value);
    }

    const getBillInputValue = function() {
        return parseFloat(billInput.value);
    }

    const getTipAmount = function() {
        return parseFloat(tipAmountInput.value);
    }

    const showTipPorcentage = function() {
        percentageMeasuring.innerHTML = tipInput.value + "%"
    }

    const calculateTipAmount = function() {
        const billInput = getBillInputValue();
        const porcentage = getPercentageTip();
        if(isNaN(billInput)) {
            clearInputs();
            return;
        }
            

        const tipAmount = billInput * (porcentage/100)
        
        showTipAmount(tipAmount);
    }

    const calculateBillWithTip = function() {
        const tipAmount = getTipAmount();
        const bill = getBillInputValue();
        if(isNaN(tipAmount) || isNaN(bill)) {
            clearInputs();
            return;
        }
            
        
        const billWithTip = bill - tipAmount;

        showTotalBillWithTip(billWithTip);
    }

    const showTipAmount = function(tipAmount) {
        tipAmountInput.value = tipAmount.toFixed(2);
    }

    const showTotalBillWithTip = function(billWithTip) {
        totalBillWithTip.value = billWithTip.toFixed(2);
    }

    const clearInputs = function() {
        tipAmountInput.value = "";
        totalBillWithTip.value = "";
    }

    tipInput.addEventListener("change", (e) => {
        showTipPorcentage();
        calculateTipAmount();
        calculateBillWithTip();
    })

    billInput.addEventListener("focusout", (e) => {
        calculateTipAmount();
        calculateBillWithTip();
    }) 

    showTipPorcentage();

} 

const tipCalculator = new TipCalculator();

