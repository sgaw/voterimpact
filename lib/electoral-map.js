"use strict";

module.exports = class ElectoralMap {
  constructor() {
    this.stateMap = {
      "AL" : "Alabama",
      "AK" : "Alaska",
      "AZ" : "Arizona",
      "AR" : "Arkansas",
      "CA" : "California",
      "CO" : "Colorado",
      "CT" : "Connecticut",
      "DE" : "Delaware",
      "FL" : "Florida",
      "GA" : "Georgia",
      "HI" : "Hawaii",
      "ID" : "Idaho",
      "IL" : "Illinois",
      "IN" : "Indiana",
      "IA" : "Iowa",
      "KS" : "Kansas",
      "KY" : "Kentucky",
      "LA" : "Louisiana",
      "ME" : "Maine",
      "MD" : "Maryland",
      "MA" : "Massachusetts",
      "MI" : "Michigan",
      "MN" : "Minnesota",
      "MS" : "Mississippi",
      "MO" : "Missouri",
      "MT" : "Montana",
      "NE" : "Nebraska",
      "NV" : "Nevada",
      "NH" : "New Hampshire",
      "NJ" : "New Jersey",
      "NM" : "New Mexico",
      "NY" : "New York",
      "NC" : "North Carolina",
      "ND" : "North Dakota",
      "OH" : "Ohio",
      "OK" : "Oklahoma",
      "OR" : "Oregon",
      "PA" : "Pennsylvania",
      "RI" : "Rhode Island",
      "SC" : "South Carolina",
      "SD" : "South Dakota",
      "TN" : "Tennessee",
      "TX" : "Texas",
      "UT" : "Utah",
      "VT" : "Vermont",
      "VA" : "Virginia",
      "WA" : "Washington",
      "DC" : "Washington D.C.",
      "WV" : "West Virginia",
      "WI" : "Wisconsin",
      "WY" : "Wyoming"
    };
    this.callMap = {
      "AL" : 0,
      "AK" : 0,
      "AZ" : 0,
      "AR" : 0,
      "CA" : 0,
      "CO" : 0,
      "CT" : 0,
      "DE" : 0,
      "FL" : 0,
      "GA" : 0,
      "HI" : 0,
      "ID" : 0,
      "IL" : 0,
      "IN" : 0,
      "IA" : 0,
      "KS" : 0,
      "KY" : 0,
      "LA" : 0,
      "ME" : 0,
      "MD" : 0,
      "MA" : 0,
      "MI" : 0,
      "MN" : 0,
      "MS" : 0,
      "MO" : 0,
      "MT" : 0,
      "NE" : 0,
      "NV" : 0,
      "NH" : 0,
      "NJ" : 0,
      "NM" : 0,
      "NY" : 0,
      "NC" : 0,
      "ND" : 0,
      "OH" : 0,
      "OK" : 0,
      "OR" : 0,
      "PA" : 0,
      "RI" : 0,
      "SC" : 0,
      "SD" : 0,
      "TN" : 0,
      "TX" : 0,
      "UT" : 0,
      "VT" : 0,
      "VA" : 0,
      "WA" : 0,
      "DC" : 0,
      "WV" : 0,
      "WI" : 0,
      "WY" : 0,
    };

  }

  assignTrump(state) {
    if (state in this.callMap) {
      this.callMap[state] = 1;
    }
  }

  assignClinton(state) {
    if (state in this.callMap) {
      this.callMap[state] = 2;
    }
  }

  serialize() {
    var values = [];
    for (var state in this.callMap) {
      values.push(this.callMap[state].toString());
    }
    return values.join("");
  }
  getCall(state) {
    return this.callMap[state];
  }
}
