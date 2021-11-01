let dname = "D8";
let num = "Eight";

let a = [
    "Chief Complaint",
    "History of Present Illness",
    "Habits",
    "Clinical Features",
    "Aspiration",
    "Radiograph",
    "Surgical Details",
    "Type of Biopsy",
    "Macroscopic Features",
    "Provisional Diagnosis",
    "Incisional Biopsy Diagnosis",
    "Macroscopic Features",
    "Histopathology",
    "Diagnosis",
    "Further investigation",
    "Chief Complaint",
    "History of Present Illness",
    "Habits & Duration",
    "Clinical Features",
    "Aspiration",
    "Radiograph",
    "Surgical Details",
    "Type of biopsy",
    "Site of Biopsy",
    "Nature of Tissue:",
    "Provisional Diagnosis:",
]
let b = [
    "chiefComplaint",
    "historyOfPresentIllness",
    "habits",
    "clinicalFeatures",
    "aspiration",
    "radiograph",
    "surgicalDetails",
    "typeOfBiopsy",
    "macroscopicFeatures",
    "provisionalDiagnosis",
    "incisionalBiopsyDiagnosis",
    "macroscopicFeatures",
    "histopathology",
    "diagnosis",
    "furtherInvestigation",
    "chiefComplaint",
    "historyOfPresentIllness",
    "habitsDuration",
    "clinicalFeatures",
    "aspiration",
    "radiograph",
    "surgicalDetails",
    "typeOfBiopsy",
    "siteOfBiopsy",
    "natureOfTissue",
    "provisionalDiagnosis",
]
const fs = require('fs');
const stream = fs.createWriteStream("script1-html.txt");
stream.once('open', function (fd) {
    for (let index = 0; index < a.length; index++) {
        stream.write(`<TextareaControl mt={3}  isReadOnly={user.department !== '${dname}'} name="${b[index]}" label="${a[index]}" />\n`);
    }
    stream.close()
});

const stream1 = fs.createWriteStream("script2-json.txt");
stream1.once('open', function (fd) {
    for (let index = 0; index < a.length; index++) {
        stream1.write(`${b[index]}:patient.patientD${num}Data.${b[index]},\n`)
    }
    stream1.close()
});

const stream2 = fs.createWriteStream("script3-json-init.txt");
stream2.once('open', function (fd) {
    for (let index = 0; index < b.length; index++) {
        stream2.write(`${b[index]}:'',\n`);
    }
    stream2.close()
});

const stream3 = fs.createWriteStream("script4b-entity.txt");
stream3.once('open', function () {
    for (let index = 0; index < b.length; index++) {
        stream3.write(`
    @Column({ nullable: true })
    ${b[index]}:string;\n`);
    }
    stream3.close();
});

const stream4 = fs.createWriteStream("script4b-add.txt");
stream4.once('open', function (fd) {
    for (let index = 0; index < b.length; index++) {
        stream4.write(`
@IsString()
${b[index]}: string;\n
`);
    }
    stream4.close();
});