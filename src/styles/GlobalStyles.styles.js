import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
 :root { // 전역변수로서 사용할 애들 넣어주기
        --brown :#A35709;
        --beige: #FFF8EA;
        --day:#364968;
        --week:#FDDF97;
        --month:#E09664;

        --darkgray:#567189;
        --modal:#6C4343;
        --label:#7B8FA1;
        --hover:#D8D8D8;
    }
    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    html, body, #root {
        height: 100%;
    }
    html,
    body,
    body > div { /* the react root */
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    #root {
        display: flex;
    }
    h2 {
        margin: 0;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0 0 0 1.5em;
    }
    li {
        padding: 0;
    }
    b { 
        margin-right: 3px;
    }
`;


export default GlobalStyles;