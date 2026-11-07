import express, {Express, Request, Response} from "express";

const app: Express = express();

const port: number = 3000;

app.get("/tours", (req: Request, res: Response) => {
  res.send("Danh sach các tour du lịch");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});