function circulationByAgeAndGender(year, gender) {
  year = Number(year);
  if (year > !1) {
    if (gender == "m") {
      if (year >= 16) {
        console.log("Mr.");
      } else if (year < 16) {
        console.log("Master");
      }
    } else if (gender == "f") {
      if (year >= 16) {
        console.log("Ms.");
      } else if (year < 16) {
        console.log("Miss");
      }
    }
  } else {
    console.log("invalid age");
  }
}

circulationByAgeAndGender(12, "f");
circulationByAgeAndGender(17, "m");
circulationByAgeAndGender(25, "f");
circulationByAgeAndGender(13.5, "m");
