import React from "react";
import { Link } from "react-router-dom";
import css from "./report-form.css";
import { ButtonForm } from "../../ui/button-form/ButtonForm";
import { TextField } from "../../ui/text-field";
import { Dropzone } from "../drop-zone";
import { dropzone } from "../../hooks/dropzone-atom";
import { useRecoilValue } from "recoil";
// import { Mapbox } from "../mapbox";

type ReportPet = {
  report: (params: {
    name?: string;
    race?: string;
    pictureURL?: string;
    location?: {
      lat: string;
      lng: string;
    };
  }) => any;
  error?: String;
};

export function ReportForm(props: ReportPet) {
  const picture = useRecoilValue(dropzone);

  function onSubmitHandler(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const race = e.target.raza.value;
    const pictureURL = picture[0];
    props.report({
      name,
      race,
      pictureURL,
    });
  }

  return (
    <div>
      <form className={css.root} onSubmit={onSubmitHandler}>
        <TextField type="text" name="name" placeholder="Name" />
        <TextField type="text" name="raza" placeholder="Race" />
        <div className={css.dropzone}>
          <Dropzone />
        </div>
        <span className={css.instruction}>
          By default the location where you are will be reported, if you wish to
          indicate another location in the report you can do so on the map
          below.
        </span>
        {/* <Mapbox></Mapbox> */}

        <ButtonForm>Report</ButtonForm>
        <Link to="/home">
          <ButtonForm>Cancel</ButtonForm>
        </Link>
      </form>
    </div>
  );
}