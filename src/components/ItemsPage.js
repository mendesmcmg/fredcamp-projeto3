import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";

function ItemsPage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Post List</Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <ItemsForm />
      <br/>
      <ItemsList />
    </>
  );
}

export default ItemsPage;
