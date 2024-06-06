import {Draggable} from "@hello-pangea/dnd";
import {Card, Checkbox, Stack, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {editTask} from "../features/boardsSlice";
import {openModal} from "../features/modalSlice";
import {useMemo, useState} from "react";
import {styled} from '@mui/material/styles';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import PriorityChip from "./PriorityChip.jsx";

const ExpandMore = styled((props) => {
	const {expand, ...other} = props;
	return <IconButton {...other} />;
})(({theme, expand}) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));


const BoardListCard = ({task, index}) => {
	const [expanded, setExpanded] = useState(false);
	
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	
	
	const dispatch = useDispatch();
	
	const onShowTasksDetail = () => {
		dispatch(openModal({type: "taskDetail", detail: task}));
	};
	
	const handleStatusChange = () => {
		const newStatus =
			task.status === "completed" ? "notCompleted" : "completed";
		dispatch(
			editTask({newTask: {...task, status: newStatus}, oldTask: task})
		);
	};
	
	const subtasksCount = task?.subtasks.length
	const subtasksCompletedCount = useMemo(() => {
		return task?.subtasks.filter(i => i.status === 'completed').length
	}, [task.subtasks])
	
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided, snapshot) => (
				<Card sx={{maxWidth: 345, mb: "16px",}}
							variant="outlined"
							className={`${snapshot.isDragging && "is-dragging-card "}`}
							ref={provided.innerRef}
							{...provided.draggableProps}
				
				>
					
					<Stack direction="row" justifyContent="space-between" alignItems="flex-start" padding="8px">
						<Box
							{...provided.dragHandleProps}
							onClick={onShowTasksDetail}
							sx={{cursor: "pointer"}}
						>
							{<Typography component={"h4"} variant={"body1"} sx={{fontWeight: "600"}}>{task.title}</Typography>}
							{<Typography
								variant="caption"
								color="text.secondary">{`${subtasksCompletedCount} of ${subtasksCount} is completed`}</Typography>}
						</Box>
						
						<Checkbox
							checked={task.status === "completed"}
							onChange={handleStatusChange}
						/>
					</Stack>
					
					<CardActions disableSpacing>
						<PriorityChip priority={task?.priority}/>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
						>
							<ExpandMoreIcon/>
						</ExpandMore>
					</CardActions>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{task.description}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			)}
		
		
		</Draggable>
	);
};

export default BoardListCard;
