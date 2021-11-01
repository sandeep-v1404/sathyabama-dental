let dname = "D0";
let num = "Zero";

let a = [
    "Chief Complaint",
    "History of Presenting Illness",
    "Medical History",
    "Surgical History",
    "Dental History",
    "Personal History",
    "Family History",
    "Marital History",
    "General Examination",
    "Vital Signs",
    "Systemic Examination",
    "Extra Oral Examination",
    "Intra Oral Examination",
    "Hard Tissue Examination",
    "Teeth",
    "Gingiva",
    "Alveolar Mucosa",
    "Buccal Mucosa",
    "Labial Mucosa",
    "Palate",
    "Tongue",
    "Tonsils",
    "Floor of the Mouth",
    "Pillars of the Fauces",
    "Examination of the Lesion",
    "Summary",
    "Provisional Diagnosis",
    "Differential Diagnosis",
    "Investigations",
    "Final Diagnosis",
    "Treatment Plan",
]
let b = [
    "chiefComplaint",
    "historyOfPresentingIllness",
    "medicalHistory",
    "surgicalHistory",
    "dentalHistory",
    "personalHistory",
    "familyHistory",
    "maritalHistory",
    "generalExamination",
    "vitalSigns",
    "systemicExamination",
    "extraOralExamination",
    "intraOralExamination",
    "hardTissueExamination",
    "teeth",
    "gingiva",
    "alveolarMucosa",
    "buccalMucosa",
    "labialMucosa",
    "palate",
    "tongue",
    "tonsils",
    "floorOfTheMouth",
    "pillarsOfTheFauces",
    "examinationOfTheLesion",
    "summary",
    "provisionalDiagnosis",
    "differentialDiagnosis",
    "investigations",
    "finalDiagnosis",
    "treatmentPlan",
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