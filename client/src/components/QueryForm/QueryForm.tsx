import React from "react";
import { FormFieldWithLabel } from "../../common/FormField/FormFieldWithLabel";
import { Button } from "../../common/Button/Button";
import { useSelector } from "react-redux";
import {
  getQueryFormCoordinates,
  getQueryFormEntityLabels,
  getQueryFormEntityNames,
} from "../../store/selectors";
import { useAppDispatch } from "../../store/store";
import {
  clearCoordinates,
  setCoordinates,
} from "../../store/queryFormCoordinates/queryFormCoordinatesSlice";
import { queryCoordinates } from "../../store/queryFormCoordinates/queryFormCoordinatesThunk";
import { QueryResult } from "./components/QueryResult";

const style = {
  wrapper: `w-full flex flex-col p-20 gap-y-10`,
  title: `text-center mb-7 text-2xl font-bold`,
  form: `flex gap-6 items-start justify-center flex-wrap`,
};

export const QueryForm = () => {
  const dispatch = useAppDispatch();
  const fields = ["x1", "y1", "x2", "y2"];

  const coordinates = useSelector(getQueryFormCoordinates);

  const entityNames = useSelector(getQueryFormEntityNames);
  const entityLabels = useSelector(getQueryFormEntityLabels);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(coordinates);
    dispatch(queryCoordinates(coordinates));
    dispatch(clearCoordinates());
  };

  const handleInputChange = (e) => {
    dispatch(setCoordinates({ [e.target.name]: e.target.value }));
  };

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Query form</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <FormFieldWithLabel
              key={field}
              name={field}
              value={coordinates[field]}
              onChange={handleInputChange}
            />
          );
        })}
        <Button text="query" onClick={() => {}} type="submit" />
      </form>

      <QueryResult entityNames={entityNames} entityLabels={entityLabels} />
    </div>
  );
};
