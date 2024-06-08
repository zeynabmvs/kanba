import {Typography} from "@mui/material";


const ModalTitle = ({text}) => {
	return (
		<Typography component={"h3"} variant={"h6"} sx={{pb: "16px"}}>{text}</Typography>
	)
}


export default ModalTitle