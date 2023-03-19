window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    outputElement = document.getElementById("result")
    
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function convertToExp(number) {
        if (number.length >= 10) {
            if (+number > 1) {
                mantissa = (+number)/(10**(number.length-1))
                if (String(mantissa).length > 6) {
                    mantissa = String(mantissa)
                    mantissa = mantissa[0] + mantissa[1] + mantissa[2] + mantissa[3] + mantissa[4]
                }
                return String(mantissa) + 'e' + '+' + (number.length-1)
            }
            if (+number < 1) {
                
            }
        }
        return number
    }
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                if (!(a == '0' && digit == '0')) {
                    if (a == '0' && digit != '0') {
                        a = digit 
                    } else 
                    a += digit
                    if (a[0] == '.')
                    a = '0' + a
                }
            }
            
            // let expForm = convertToExp(a)
            
            // console.log(convertToExp(a))
            outputElement.innerHTML = convertToExp(a)
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
                if (!(b == '0' && digit == '0')) {
                    if (b == '0' && digit != '0') {
                        b = digit 
                    } else 
                        b += digit
                    if (b[0] == '.')
                        b = '0' + b
                }
                outputElement.innerHTML = convertToExp(b)        
            }
        }
    }
    
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_sign").onclick = function() { 
        if (a === '') return
        else if ( a !== '' && b === '') {
            a = (+a)*(-1)
            outputElement.innerHTML = convertToExp(a)
        }
        else {
            b = (+b)*(-1)
            outputElement.innerHTML = convertToExp(b)
        }
    }
    
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = convertToExp(a)
    }
};