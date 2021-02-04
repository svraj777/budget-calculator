import React, { useState, useEffect } from "react";
import ExpanceList from "./ExpanceList";
import { Button } from "@material-ui/core";
// const initalData = [
//   {
//     index: 0,
//     values: 1250,
//     name: "Irwin Elliott"
//   },
//   {
//     index: 1,
//     values: 1631,
//     name: "Alexander Delgado"
//   },
//   {
//     index: 2,
//     values: 1309,
//     name: "Robert Shelton"
//   },
//   {
//     index: 3,
//     values: 4785,
//     name: "Ashley Sims"
//   },
//   {
//     index: 4,
//     values: 312,
//     name: "Valarie Acosta"
//   }
// ];
export default function Form() {
  useEffect(() => {
    const datas = localStorage.getItem("Expance")
      ? JSON.parse(localStorage.getItem("Expance"))
      : [];
    setExpence(datas);
    console.log(datas, "log");
  });
  const [Name, setName] = useState("");
  const [values, setValue] = useState(0);
  const [Expence, setExpence] = useState([]);
  const [Edit, setEdit] = useState(false);
  const [id, setid] = useState(0);
  const clearData = () => {
    // console.log("clear all the data");
    setExpence("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (Edit) {
      const newExpence = Expence.map((items) => {
        return items.index === id
          ? { ...items, name: Name, values: values }
          : items;
      });
      setExpence(newExpence);
      setEdit(false);
      setName("");
      setValue("");
    } else {
      const singleItem = { index: Expence.length, name: Name, values: values };
      setExpence([...Expence, singleItem]);
      setName("");
      setValue("");
    }

    localStorage.setItem("Expance", JSON.stringify(Expence));
    //localStorage.setItem("bgcolor", "red");
  };
  const handleDelete = (id) => {
    //  console.info("You clicked the delete icon.", id);
    const newExpence = Expence.filter((items) => items.index !== id);
    setExpence(newExpence);
    setEdit(false);
  };
  const handleEdit = (id) => {
    //  console.info("You clicked the Chip.", id);
    setEdit(true);
    const newExpence = Expence.find((items) => items.index === id);
    //   console.log(newExpence, "edit");
    const { values, name } = newExpence;
    setid(id);
    setName(name);
    setValue(values);
  };

  const myChangeHandler = (e) => {
    e.preventDefault();

    let nam = e.target.name;
    let val = e.target.value;
    console.log(nam, val);
    if (nam == "name") {
      setName(e.target.value);
    }
    if (nam == "values") {
      setValue(e.target.value);
    }
  };
  return (
    <div>
      <h2>Form componant</h2>
      <form onSubmit={submitHandler}>
        <span>Charge:-</span>
        <input
          type="text"
          name="name"
          value={Name}
          onChange={myChangeHandler}
        />

        <span>Amount:-</span>
        <input
          type="number"
          value={values}
          name="values"
          onChange={myChangeHandler}
        />

        <Button variant="contained" color="primary" onClick={submitHandler}>
          {Edit ? "Edit" : "submit"}
        </Button>
      </form>
      <br />
      {Expence.length && (
        <ExpanceList
          ExpanceList={Expence}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
      <div onClick={clearData}>
        <span>Delete All</span>
      </div>
      <br />
      <div>
        Total Amount:$
        {Expence.length && Expence.reduce((a, b) => a + parseInt(b.values), 0)}
      </div>
    </div>
  );
}
