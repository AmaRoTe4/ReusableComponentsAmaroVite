import {
  cartelError,
  cartelInfo,
  cartelSuccess,
  cartelWait,
} from "./Carteles/index";
import TableBody from "./Tables/Body";
import TableHeader from "./Tables/Header";
import TableIndex from "./Tables/Index";
import UseTable from "./Tables/UseTable";
import BasicCuerpo from "./Layout/BasicCuerpo";
import { Button } from "./Layout/Button";
import { InputRadio } from "./Layout/InputRadio";
import { InputText } from "./Layout/InputText";
import LoadingScreen from "./Layout/LoadingScreen";
import { NormalModal } from "./Layout/NormalModal";

const exportacion = {
  carteles: {
    cartelError,
    cartelInfo,
    cartelSuccess,
    cartelWait,
  },
  tables: {
    TableBody,
    TableHeader,
    TableIndex,
    UseTable,
  },
  layout: {
    BasicCuerpo,
    Button,
    InputRadio,
    InputText,
    LoadingScreen,
    NormalModal,
  },
};

export default exportacion;
