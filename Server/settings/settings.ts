 const SETTING_1:string = "We are in a cafe in paris and You are trying to sell me a flower."
 const SETTING_2:string = "We are in a park and we are watching other people doing stuff."
 const SETTING_3:string = "We are texting to each other on the phone."

export const chooseSetting = function(choice:string){
    switch(choice){
        case "Cafe in paris":
            return SETTING_1
        case "Park":
            return SETTING_2
        case "Texting":
            return SETTING_3
        default:
            return SETTING_1
    }
}