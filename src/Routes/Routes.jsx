import { Routes as Routing, Route } from "react-router-dom";
import Home from "../pages/Home";
import Models from "../pages/Models/Models.jsx";
import Modelnfos from "../components/ModelnfoDetails/ModelnfoDetails.jsx";
import {
  AllNewAmgGt,
  AllNewC63,
  AllNewCla,
  AllNewGla,
  AllNewGle,
  AllNewGls,
  AllNewGwagen,
  AllNewLuxuryvan,
} from "../utils/constant.jsx";
import MoreLinks from "../pages/MoreLinks/MoreLinks.jsx";
import About from "../pages/About/About.jsx";
const Routes = () => {
  return (
    <Routing>
      <Route path="/home" element={<Home />} />
      <Route path="/models" element={<Models />} />
      <Route path="*" element={<Home />} />

      {AllNewC63.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}
      {AllNewGwagen.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}
      {AllNewCla.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}

      {AllNewGla.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}

      {AllNewGls.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}

      {AllNewGle.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}

      {AllNewLuxuryvan.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}
      {AllNewAmgGt.map((data) => {
        return <Route path={data.path} element={<Modelnfos data={data} />} />;
      })}
      <Route path="/morelinks" element={<MoreLinks />} />
      <Route path="/about" element={<About />} />
    </Routing>
  );
};

export default Routes;
