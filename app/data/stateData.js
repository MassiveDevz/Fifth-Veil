import alabamaData from "../../JSON/alabama.json";
import arizonaData from "../../JSON/arizona.json";
import arkansasData from "../../JSON/arkansas.json";
import californiaData from "../../JSON/california.json";
import coloradoData from "../../JSON/colorado.json";
import connecticutData from "../../JSON/connecticut.json";
import districtOfColumbiaData from "../../JSON/districtOfColumbia.json";
import floridaData from "../../JSON/florida.json";
import georgiaData from "../../JSON/georgia.json";
import illinoisData from "../../JSON/illinois.json";
import indianaData from "../../JSON/indiana.json";
import iowaData from "../../JSON/iowa.json";
import kansasData from "../../JSON/kansas.json";
import kentuckyData from "../../JSON/kentucky.json";
import louisianaData from "../../JSON/louisiana.json";
import marylandData from "../../JSON/maryland.json";
import massachusettsData from "../../JSON/massachusetts.json";
import michiganData from "../../JSON/michigan.json";
import minnesotaData from "../../JSON/minnesota.json";
import mississippiData from "../../JSON/mississippi.json";
import missouriData from "../../JSON/missouri.json";
import nebraskaData from "../../JSON/nebraska.json";
import nevadaData from "../../JSON/nevada.json";
import newHampshireData from "../../JSON/newHampshire.json";
import newJerseyData from "../../JSON/newJersey.json";
import newMexicoData from "../../JSON/newMexico.json";
import newYorkData from "../../JSON/newYork.json";
import northCarolinaData from "../../JSON/northCarolina.json";
import ohioData from "../../JSON/ohio.json";
import oklahomaData from "../../JSON/oklahoma.json";
import oregonData from "../../JSON/oregon.json";
import pennsylvaniaData from "../../JSON/pennsylvania.json";
import puertoRicoData from "../../JSON/puertoRico.json";
import rhodeIslandData from "../../JSON/rhodeIsland.json";
import southCarolinaData from "../../JSON/southCarolina.json";
import tennesseeData from "../../JSON/tennessee.json";
import texasData from "../../JSON/texas.json";
import vermontData from "../../JSON/vermont.json";
import virginiaData from "../../JSON/virginia.json";
import washingtonData from "../../JSON/washington.json";
import westVirginiaData from "../../JSON/westVirginia.json";
import wisconsinData from "../../JSON/wisconsin.json";

/** Keys are URL segments (e.g. /florida, /new-york). Order matches dropdown sort (A–Z by label). */
export const STATE_DATA = {
  alabama: alabamaData,
  arizona: arizonaData,
  arkansas: arkansasData,
  california: californiaData,
  colorado: coloradoData,
  connecticut: connecticutData,
  "district-of-columbia": districtOfColumbiaData,
  florida: floridaData,
  georgia: georgiaData,
  illinois: illinoisData,
  indiana: indianaData,
  iowa: iowaData,
  kansas: kansasData,
  kentucky: kentuckyData,
  louisiana: louisianaData,
  maryland: marylandData,
  massachusetts: massachusettsData,
  michigan: michiganData,
  minnesota: minnesotaData,
  mississippi: mississippiData,
  missouri: missouriData,
  nebraska: nebraskaData,
  nevada: nevadaData,
  "new-hampshire": newHampshireData,
  "new-jersey": newJerseyData,
  "new-mexico": newMexicoData,
  "new-york": newYorkData,
  "north-carolina": northCarolinaData,
  ohio: ohioData,
  oklahoma: oklahomaData,
  oregon: oregonData,
  pennsylvania: pennsylvaniaData,
  "puerto-rico": puertoRicoData,
  "rhode-island": rhodeIslandData,
  "south-carolina": southCarolinaData,
  tennessee: tennesseeData,
  texas: texasData,
  vermont: vermontData,
  virginia: virginiaData,
  washington: washingtonData,
  "west-virginia": westVirginiaData,
  wisconsin: wisconsinData,
};

/** Display names for URL slugs (keys must match STATE_DATA). */
export const STATE_LABELS = {
  alabama: "Alabama",
  arizona: "Arizona",
  arkansas: "Arkansas",
  california: "California",
  colorado: "Colorado",
  connecticut: "Connecticut",
  "district-of-columbia": "District of Columbia",
  florida: "Florida",
  georgia: "Georgia",
  illinois: "Illinois",
  indiana: "Indiana",
  iowa: "Iowa",
  kansas: "Kansas",
  kentucky: "Kentucky",
  louisiana: "Louisiana",
  maryland: "Maryland",
  massachusetts: "Massachusetts",
  michigan: "Michigan",
  minnesota: "Minnesota",
  mississippi: "Mississippi",
  missouri: "Missouri",
  nebraska: "Nebraska",
  nevada: "Nevada",
  "new-hampshire": "New Hampshire",
  "new-jersey": "New Jersey",
  "new-mexico": "New Mexico",
  "new-york": "New York",
  "north-carolina": "North Carolina",
  ohio: "Ohio",
  oklahoma: "Oklahoma",
  oregon: "Oregon",
  pennsylvania: "Pennsylvania",
  "puerto-rico": "Puerto Rico",
  "rhode-island": "Rhode Island",
  "south-carolina": "South Carolina",
  tennessee: "Tennessee",
  texas: "Texas",
  vermont: "Vermont",
  virginia: "Virginia",
  washington: "Washington",
  "west-virginia": "West Virginia",
  wisconsin: "Wisconsin",
};
