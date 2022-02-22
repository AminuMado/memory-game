import deidara_src from "../../../public/Assets/images/deidara.png";
import hidan_src from "../../../public/Assets/images/hidan.png";
import itachi_src from "../../../public/Assets/images/itachi.png";
import kakuzu_src from "../../../public/Assets/images/kakuzu.png";
import kisame_src from "../../../public/Assets/images/kisame.png";
import konan_src from "../../../public/Assets/images/konan.png";
import madara_src from "../../../public/Assets/images/madara1.png";
import obito_src from "../../../public/Assets/images/obito.png";
import pain_src from "../../../public/Assets/images/pain.png";
import sasori_src from "../../../public/Assets/images/sasori.png";
import tobi_src from "../../../public/Assets/images/tobi.png";
import zetsu_src from "../../../public/Assets/images/zetsu.png";
import { nanoid } from "nanoid";
const data = [
  { name: Deidara, photo: deidara_src, id: nanoid(), clicked: false },
  { name: Hidan, photo: hidan_src, id: nanoid(), clicked: false },
  { name: Itachi, photo: itachi_src, id: nanoid(), clicked: false },
  { name: Kakuzu, photo: kakuzu_src, id: nanoid(), clicked: false },
  { name: Kisame, photo: kisame_src, id: nanoid(), clicked: false },
  { name: Konan, photo: konan_src, id: nanoid(), clicked: false },
  { name: Madara, photo: madara_src, id: nanoid(), clicked: false },
  { name: Obito, photo: obito_src, id: nanoid(), clicked: false },
  { name: Pain, photo: pain_src, id: nanoid(), clicked: false },
  { name: Sasori, photo: sasori_src, id: nanoid(), clicked: false },
  { name: Tobi, photo: tobi_src, id: nanoid(), clicked: false },
  { name: Zetsu, photo: zetsu_src, id: nanoid(), clicked: false },
];
export default data;
