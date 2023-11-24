JavaScript Execution context
    1. Global execution context
    2. Execution context of browser and nodejs is different , and browser global execution context value of this is window

    --------------------------------------------------
    1. Global execution context
    2. Function execution context
    3. Eval execution context

    -----------------------------------------------------

    Phases of execution
    1. Memory creation phase 
    2. Execution phase

    Example:- 
            let val1 = 10
            let val2 = 5
            function addNum(num1,num2){
                let total = num1+num2
                return total
            }
            let result1 = addNum(val1,val2)
            let result2 = addNum(10,2)
    
    Step - 1 Global Execution - allocate to this

    step - 2 Memory Phase - 
            1. val1 = undefined
            2. val2 = undefined
            3. addNum -> function definition
            4. result1 = undefined
            5. result2 = undefined
----------------First Cycle ---------------------
    Step - 3 - Execution phase

            val1 <- 10 
            val2 <- 5
            addNum ---------->  New execution phase is created
                                 New variable environment
                                          +
                                   Execution thread
                                1. Memory Phase
                                   val1= undefined
                                   val2 = undefined
                                   total = undefined
                                2. Executio Phase
                                   num1 = 10
                                   num2 = 5
                                   total = 15
                                ----return back to global execution context after this it will be deleted-------
            result1 = 15 
            retult2 = ------->  New execution phase is created
                                 New variable environment
                                          +
                                   Execution thread
                                1. Memory Phase
                                   val1= undefined
                                   val2 = undefined
                                   total = undefined
                                2. Executio Phase
                                   num1 = 10
                                   num2 = 2
                                   total = 2
                                ----return back to global execution context after this it will be deleted-------
            result2 = 12
             
            Call stack
            |                        |
            |                        |
            |                        |
            |                        |
            |  three()               |
            |   two()                |
            |   One()                |
            |Global Execution Context| LIFO is followed here


           
                                