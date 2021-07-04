import React from "react";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import LocationCityIcon from "@material-ui/icons/LocationCity";

export default function SelectCity() {
  const [city, setCity] = React.useState("Bijnor");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <LocationCityIcon />

        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city}
          onChange={handleChange}
        >
          <MenuItem value="Bijnor">Bijnor</MenuItem>
          <MenuItem value="Hapur">Hapur</MenuItem>
          <MenuItem value="Ghaziabad">Ghaziabad</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
