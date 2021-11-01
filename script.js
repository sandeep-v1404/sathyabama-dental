let dname = "D3";
let num = "Three";

let a = [
    "Chief Complaint",
    "History of Presenting Illness",
    "Past Dental History",
    "Past Medical History:  ",
    "Allergies If Any:",
    "Extra Oral Examination:",
    "Intra Oral Examination:",
    "Periodontal  Status",
    "Provisional  Diagnosis",
    "Differential  Diagnosis:",
    "Diagnostic  Tests",
    "Radiographic  Interpretation :",
    "Other Investigations",
    "Diagnosis",
    "Treatment  Advised",
    "Patient Motivation",
    "Treatment Notes",
    "Tooth Number",
    "Access Cavity Preparation and Pulp Extirpation:",
    "Bio- Mechanical Preparation",
    "Obturation",
    "Post Operative Radiograph",
    "Existing  Restorations and Status",
    "Radiographic  Pulp Exposure",
    "Lamina Dura",
    "Periapical  Radiolucency",
    "Periodontal  Status",
    "Nature  of Root Canal in Involved  Tooth",
    "Previous Endodontic  Treatment",
    "Fracture of Teeth",
    "Any Other Abnormalities",
]
let b = [
    "chiefComplaint",
    "historyOfPresentingIllness",
    "pastDentalHistory",
    "pastMedicalHistory",
    "allergiesIfAny",
    "extraOralExamination",
    "intraOralExamination",
    "periodontalStatus",
    "provisionalDiagnosis",
    "differentialDiagnosis",
    "diagnosticTests",
    "radiographicInterpretation",
    "otherInvestigations",
    "diagnosis",
    "treatmentAdvised",
    "patientMotivation",
    "treatmentNotes",
    "toothNumber",
    "accessCavityPreparationAndPulpExtirpation",
    "bioMechanicalPreparation",
    "obturation",
    "postOperativeRadiograph",
    "existingRestorationsAndStatus",
    "radiographicPulpExposure",
    "laminaDura",
    "periapicalRadiolucency",
    "periodontalStatus",
    "natureOfRootCanalInInvolvedTooth",
    "previousEndodonticTreatment",
    "fractureOfTeeth",
    "anyOtherAbnormalities",
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
        console.log();
        stream3.write(`
    @Column({ nullable: true })
    ${b[index]}:string;\n`);
    }
    stream3.close();
});

const stream4 = fs.createWriteStream("script4b-add.txt");
stream4.once('open', function (fd) {
    for (let index = 0; index < b.length; index++) {
        console.log();
        stream4.write(`
@IsString()
${b[index]}: string;\n
`);
    }
    stream4.close();
});