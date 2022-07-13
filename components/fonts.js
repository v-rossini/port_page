import { Global } from "@emotion/react";

const Fonts = () => {
    return (
        <Global styles={`
         @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&family=Poppins:wght@200;300;400&display=swap');
        `} 
        />
    )
}

export default Fonts