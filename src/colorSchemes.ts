

interface ColorScheme{
    backgroundColor:string,
    textColor:string,
    buttonBackgroundColor:string,
}

interface ColorSchemeObj{
    scheme01:ColorScheme
    scheme02:ColorScheme
}

export const ColorSchemes:ColorSchemeObj = {
    scheme01:{
        backgroundColor: "#332722",
        textColor: "#E5FCF9",
        buttonBackgroundColor:"#86452D"
    },
    scheme02:{
        backgroundColor: "#38471E",
        textColor: "#D0D3B8",
        buttonBackgroundColor:"#A5B064"
    }
}
