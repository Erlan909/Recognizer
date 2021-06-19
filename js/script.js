        let arr = [
            {
                question:'Каого цвета небо?',
                answer: 'голубого'
            },
            {
                question:'Сколько пальцев на руке',
                answer: '5'
            }
        ]
        let count = 0
        let score = 0
        let recognizer = new webkitSpeechRecognition()

        recognizer.interimResults = true
        recognizer.lang = 'ru-Ru'
        let synth = window.speechSynthesis;
        recognizer.onresult = function(event){
            let result = event.results[event.resultIndex]
            if(result.isFinal){
                    if(result[0].transcript == arr[count].answer){
                        let answer = new SpeechSynthesisUtterance('правильно')
                        synth.speak(answer)
                        count++
                        score +=10
                    }else{
                        let answer = new SpeechSynthesisUtterance('не правильно')
                        synth.speak(answer)
                        count++
                    }

            }else{
                console.log('промежуточный результат '+ result[0].transcript)
            }
        }
    
        const speech = ()=>{
            recognizer.start()
        }

        
        
        const talk = ()=>{
            if(count<arr.length){
                let answer = new SpeechSynthesisUtterance(arr[count].question)
                synth.speak(answer)
                recognizer.start()
               
            }
               else{
                let answer = new SpeechSynthesisUtterance("ты набрал"+score+"балов")
                synth.speak(answer)
              }
        }

         //      let h2 = document.createElement('h2')
    //      h2.innerHTML=result[0].transcript
    //      document.body.appendChild(h2)
    //     // alert(result[0].transcript == 'привет')
    //     if (result[0].transcript == 'Привет'){
    //         let word = new SpeechSynthesisUtterance('Я че спрашивал')
    //         talk(word)
    //     }
    //     if (result[0].transcript == 'Как дела'){
    //         let word = new SpeechSynthesisUtterance('хорошо')
    //         talk(word)
    //     }

