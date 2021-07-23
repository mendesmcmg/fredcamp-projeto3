import { Button, Card, CardContent } from "@material-ui/core";
import deleteItem from "../api/deleteItem";

const ItemsCard = ({ post }) => {
  const { key, title, text, date } = post;

  return (
    <Card variant="outlined" style={{ marginBottom: 8 }}>
      <CardContent>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => deleteItem(key)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
export default ItemsCard;
