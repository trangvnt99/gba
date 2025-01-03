import { useNavigate } from "react-router-dom";

const SelectedCountry = (e, navigate) => {
    switch (e) {
        case "chauau":
            navigate("/main_member/chauau");
            break;
        case "nhatban":
            navigate("/main_member/nhatban");
            break;
        case "singapore":
            navigate("/main_member/singapore");
            break;
        case "anhquoc":
            navigate("/main_member/anhquoc");
            break;
        case "trungquoc":
            navigate("/main_member/trungquoc");
            break;
        case "canada":
            navigate("/main_member/canada");
            break;
        case "dailoan":
            navigate("/main_member/dailoan");
            break;
        case "hanquoc":
            navigate("/main_member/hanquoc");
            break;
        case "theus":
            navigate("/main_member/theus");
            break;
        case "nga":
            navigate("/main_member/nga");
            break;
        case "ando":
            navigate("/main_member/ando");
            break;
        default:
            console.log("Không tìm thấy quốc gia:", e);
    }
};

export default SelectedCountry;
