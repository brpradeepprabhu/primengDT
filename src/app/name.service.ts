import { Injectable } from '@angular/core';

@Injectable()
export class NameService {

  nameData = [];

  constructor() {
    this.nameData = [
      {
        "index": 0,
        "guid": "baae89d6-32f8-4524-b9b5-a757bdd07817",
        "isActive": true,
        "balance": "$2,047.87",
        "age": 31,
        "eyeColor": "green",
        "name": "Horne Villarreal",
        "gender": "male",
        "company": "BUNGA"
      },
      {
        "index": 1,
        "guid": "fc579562-bbc0-4501-8b33-1793c65e3079",
        "isActive": false,
        "balance": "$2,375.12",
        "age": 38,
        "eyeColor": "blue",
        "name": "Velma Mccormick",
        "gender": "female",
        "company": "SUPREMIA"
      },
      {
        "index": 2,
        "guid": "31e23e0c-2397-42e2-bb60-db90504d71d5",
        "isActive": true,
        "balance": "$1,770.96",
        "age": 38,
        "eyeColor": "brown",
        "name": "Eliza Austin",
        "gender": "female",
        "company": "INSURON"
      },
      {
        "index": 3,
        "guid": "3f833c5f-9323-4f66-8a51-bbd0e2404133",
        "isActive": true,
        "balance": "$3,190.73",
        "age": 31,
        "eyeColor": "blue",
        "name": "Potter Gentry",
        "gender": "male",
        "company": "PIGZART"
      },
      {
        "index": 4,
        "guid": "2a7b59ae-cf40-4e84-b1e9-f10a7e4c4fe0",
        "isActive": false,
        "balance": "$1,749.00",
        "age": 31,
        "eyeColor": "green",
        "name": "Donovan Ortega",
        "gender": "male",
        "company": "ISOSPHERE"
      },
      {
        "index": 5,
        "guid": "4747bab6-b21d-4890-9aef-ae9212aefa24",
        "isActive": true,
        "balance": "$1,266.75",
        "age": 39,
        "eyeColor": "brown",
        "name": "Merrill Reese",
        "gender": "male",
        "company": "ONTALITY"
      },
      {
        "index": 6,
        "guid": "d2376381-81e5-4483-91c6-282594a76245",
        "isActive": true,
        "balance": "$2,492.50",
        "age": 21,
        "eyeColor": "green",
        "name": "Bobbie Mckay",
        "gender": "female",
        "company": "MOREGANIC"
      },
      {
        "index": 7,
        "guid": "43df782f-cb00-42fb-a2a0-7298da34cd3e",
        "isActive": true,
        "balance": "$2,502.92",
        "age": 38,
        "eyeColor": "green",
        "name": "Nannie Hughes",
        "gender": "female",
        "company": "NIPAZ"
      },
      {
        "index": 8,
        "guid": "5a6447e4-adb2-4924-95bb-9f98460982ba",
        "isActive": false,
        "balance": "$1,383.41",
        "age": 20,
        "eyeColor": "blue",
        "name": "Soto Michael",
        "gender": "male",
        "company": "TINGLES"
      },
      {
        "index": 9,
        "guid": "88d5e012-d6a0-4f06-ae61-fe39ec7cf0da",
        "isActive": false,
        "balance": "$2,407.60",
        "age": 24,
        "eyeColor": "blue",
        "name": "Flores Dejesus",
        "gender": "male",
        "company": "PARAGONIA"
      },
      {
        "index": 10,
        "guid": "ee77b36d-a0a4-4787-aba7-b50ea69e6829",
        "isActive": true,
        "balance": "$2,957.43",
        "age": 34,
        "eyeColor": "blue",
        "name": "Curry Cochran",
        "gender": "male",
        "company": "MAXEMIA"
      },
      {
        "index": 11,
        "guid": "0574d289-c214-4363-b008-8153f6a1ee4f",
        "isActive": true,
        "balance": "$2,727.21",
        "age": 26,
        "eyeColor": "brown",
        "name": "Ruthie Guzman",
        "gender": "female",
        "company": "ZAJ"
      },
      {
        "index": 12,
        "guid": "d3cc0529-df11-4064-afa5-05ee8c4a7bda",
        "isActive": true,
        "balance": "$2,426.83",
        "age": 25,
        "eyeColor": "brown",
        "name": "Benita Bush",
        "gender": "female",
        "company": "ACCUPRINT"
      },
      {
        "index": 13,
        "guid": "564e5cf7-3393-47eb-bec3-e217da7ab1a2",
        "isActive": true,
        "balance": "$2,596.27",
        "age": 37,
        "eyeColor": "blue",
        "name": "Deanna Ruiz",
        "gender": "female",
        "company": "COGENTRY"
      },
      {
        "index": 14,
        "guid": "cd6821fa-daac-409d-8af8-2343d5b36571",
        "isActive": true,
        "balance": "$2,474.73",
        "age": 40,
        "eyeColor": "blue",
        "name": "Kay Mathis",
        "gender": "female",
        "company": "NAVIR"
      },
      {
        "index": 15,
        "guid": "415f1b00-70a8-4f05-ad85-95d2162d0dbb",
        "isActive": true,
        "balance": "$1,710.78",
        "age": 30,
        "eyeColor": "brown",
        "name": "Watkins Parks",
        "gender": "male",
        "company": "ORONOKO"
      },
      {
        "index": 16,
        "guid": "3c52b54a-8afa-4715-af0b-9be4ea8389b8",
        "isActive": false,
        "balance": "$2,086.75",
        "age": 40,
        "eyeColor": "green",
        "name": "Franklin Lancaster",
        "gender": "male",
        "company": "SURELOGIC"
      },
      {
        "index": 17,
        "guid": "974c86be-a39d-4476-bc65-c41b6083562b",
        "isActive": true,
        "balance": "$1,308.99",
        "age": 21,
        "eyeColor": "brown",
        "name": "Emma Warren",
        "gender": "female",
        "company": "XLEEN"
      },
      {
        "index": 18,
        "guid": "2695b5b0-0a18-4fce-a443-85e97066e9e7",
        "isActive": false,
        "balance": "$2,656.81",
        "age": 23,
        "eyeColor": "blue",
        "name": "Lessie Allison",
        "gender": "female",
        "company": "SCHOOLIO"
      },
      {
        "index": 19,
        "guid": "9a8e54aa-244b-4553-b1df-1fe9132f5ee6",
        "isActive": true,
        "balance": "$1,982.18",
        "age": 22,
        "eyeColor": "green",
        "name": "Lavonne Kelley",
        "gender": "female",
        "company": "AQUASURE"
      },
      {
        "index": 20,
        "guid": "0176d87a-1030-4c4d-b943-06008dfdb1d3",
        "isActive": true,
        "balance": "$3,436.72",
        "age": 36,
        "eyeColor": "blue",
        "name": "Helene Rivas",
        "gender": "female",
        "company": "TRANSLINK"
      },
      {
        "index": 21,
        "guid": "db5921c0-c4cd-4bb8-96ef-1afd460baef6",
        "isActive": false,
        "balance": "$2,781.44",
        "age": 40,
        "eyeColor": "brown",
        "name": "Ora Cardenas",
        "gender": "female",
        "company": "MEGALL"
      },
      {
        "index": 22,
        "guid": "a3959e58-5a33-4f43-9797-1ff6641caf18",
        "isActive": false,
        "balance": "$2,593.09",
        "age": 21,
        "eyeColor": "green",
        "name": "Linda Clay",
        "gender": "female",
        "company": "ROOFORIA"
      },
      {
        "index": 23,
        "guid": "d8b231ae-3004-48fd-b4ef-09288bd3868f",
        "isActive": false,
        "balance": "$2,040.62",
        "age": 20,
        "eyeColor": "green",
        "name": "Scott Melendez",
        "gender": "male",
        "company": "NURALI"
      },
      {
        "index": 24,
        "guid": "749b7370-b6d3-4e0e-b170-4833bc894377",
        "isActive": false,
        "balance": "$1,931.11",
        "age": 27,
        "eyeColor": "brown",
        "name": "Anthony Roy",
        "gender": "male",
        "company": "HINWAY"
      },
      {
        "index": 25,
        "guid": "745c1a68-76ae-4db0-9f39-678b542fe221",
        "isActive": true,
        "balance": "$2,813.58",
        "age": 29,
        "eyeColor": "blue",
        "name": "Mooney Buckley",
        "gender": "male",
        "company": "TERRAGO"
      },
      {
        "index": 26,
        "guid": "bebef874-50d3-4d0b-9349-29603479990a",
        "isActive": false,
        "balance": "$2,176.02",
        "age": 32,
        "eyeColor": "blue",
        "name": "Sheree Kirby",
        "gender": "female",
        "company": "ROTODYNE"
      },
      {
        "index": 27,
        "guid": "dcd362cd-c33d-40a7-8c3b-ddd682b32ca9",
        "isActive": true,
        "balance": "$3,664.36",
        "age": 38,
        "eyeColor": "blue",
        "name": "Bertie Shannon",
        "gender": "female",
        "company": "STREZZO"
      },
      {
        "index": 28,
        "guid": "3283ded9-56ac-42bf-bd14-5fb84cc4db66",
        "isActive": true,
        "balance": "$2,818.24",
        "age": 32,
        "eyeColor": "blue",
        "name": "Burns Ballard",
        "gender": "male",
        "company": "UXMOX"
      },
      {
        "index": 29,
        "guid": "5e917b72-0f06-40b8-9128-ff71ad8b805c",
        "isActive": false,
        "balance": "$1,271.49",
        "age": 37,
        "eyeColor": "brown",
        "name": "Belinda Odonnell",
        "gender": "female",
        "company": "NURPLEX"
      },
      {
        "index": 30,
        "guid": "11de03ef-e002-48d7-9b03-8b38dccf76c7",
        "isActive": false,
        "balance": "$3,031.49",
        "age": 24,
        "eyeColor": "brown",
        "name": "Woodward Buckner",
        "gender": "male",
        "company": "CAPSCREEN"
      },
      {
        "index": 31,
        "guid": "6c6b2131-1ece-42ba-835c-7fd6b18a9d11",
        "isActive": false,
        "balance": "$2,731.71",
        "age": 38,
        "eyeColor": "green",
        "name": "Latasha Vargas",
        "gender": "female",
        "company": "FREAKIN"
      },
      {
        "index": 32,
        "guid": "e90e321f-7111-41bf-b822-fe24101cd8f1",
        "isActive": false,
        "balance": "$1,890.09",
        "age": 29,
        "eyeColor": "blue",
        "name": "Lidia Snider",
        "gender": "female",
        "company": "COREPAN"
      },
      {
        "index": 33,
        "guid": "f437c5f4-b9af-44dc-a9f4-12c43c8ee17f",
        "isActive": false,
        "balance": "$2,900.48",
        "age": 33,
        "eyeColor": "green",
        "name": "Gordon Davidson",
        "gender": "male",
        "company": "FISHLAND"
      },
      {
        "index": 34,
        "guid": "eee888ac-8472-444e-b99d-99a9e38588d4",
        "isActive": true,
        "balance": "$3,145.69",
        "age": 23,
        "eyeColor": "brown",
        "name": "Bray Buchanan",
        "gender": "male",
        "company": "NAMEGEN"
      },
      {
        "index": 35,
        "guid": "e1f086b7-7adf-4de9-8154-9261da202a9f",
        "isActive": true,
        "balance": "$1,408.95",
        "age": 25,
        "eyeColor": "blue",
        "name": "Rollins Walker",
        "gender": "male",
        "company": "BESTO"
      },
      {
        "index": 36,
        "guid": "85c8063f-bed9-496f-8b1f-337730d568ad",
        "isActive": false,
        "balance": "$2,365.95",
        "age": 24,
        "eyeColor": "brown",
        "name": "Holmes Clarke",
        "gender": "male",
        "company": "TALENDULA"
      },
      {
        "index": 37,
        "guid": "10f74e15-5e46-492b-b6a1-09bce2c77954",
        "isActive": false,
        "balance": "$3,952.03",
        "age": 35,
        "eyeColor": "green",
        "name": "Tammie Rogers",
        "gender": "female",
        "company": "SULTRAX"
      },
      {
        "index": 38,
        "guid": "0f9562d5-f6a8-47a4-93f9-3b30522f6e14",
        "isActive": false,
        "balance": "$2,287.95",
        "age": 29,
        "eyeColor": "brown",
        "name": "Andrews Daniel",
        "gender": "male",
        "company": "RECRISYS"
      },
      {
        "index": 39,
        "guid": "2d5e24be-5342-42b5-99d7-ff088ca166f9",
        "isActive": true,
        "balance": "$3,958.02",
        "age": 28,
        "eyeColor": "brown",
        "name": "Carissa Blair",
        "gender": "female",
        "company": "APEX"
      },
      {
        "index": 40,
        "guid": "d70138cf-26f8-4cb7-9e0f-672020332ac8",
        "isActive": true,
        "balance": "$3,142.02",
        "age": 38,
        "eyeColor": "brown",
        "name": "Elvira Sears",
        "gender": "female",
        "company": "SPACEWAX"
      },
      {
        "index": 41,
        "guid": "5d86c70d-44bb-49ae-8e32-31f1980f338f",
        "isActive": false,
        "balance": "$1,398.54",
        "age": 31,
        "eyeColor": "brown",
        "name": "Mcintyre Alvarado",
        "gender": "male",
        "company": "XANIDE"
      },
      {
        "index": 42,
        "guid": "614cad8d-d3ba-46ec-87db-e5b0d15f873e",
        "isActive": true,
        "balance": "$1,651.05",
        "age": 23,
        "eyeColor": "blue",
        "name": "Coffey Newton",
        "gender": "male",
        "company": "GINK"
      }
    ]

  }


}
