let dname = "D7";
let num = "Seven";

let a = [
    "Chief Complaints",
    "History of Present illness",
    "Dental History",
    "Medical History",
    "Family History",
    "Personal History",
    "General Examination",
    "Extra Oral",
    "Intra Oral",
    "Glnglval Findings  ",
    "Periodontal Findings  ",
    "Mucosal Findings",
    "Hard Tissues Examination",
    "Provisional Diaganosis",
    "Investigation",
    "Final Diagnosis",
    "Emergency Care",
    "Primary Level of Prevention",
    "Secondary Level of Prevention",
    "Tertiary Level of Prevention",
    "Recall and Maintenance",
    "Comprehensive Treatment Done",
]
let b = [
    "chiefComplaints",
    "historyOfPresentIllness",
    "dentalHistory",
    "medicalHistory",
    "familyHistory",
    "personalHistory",
    "generalExamination",
    "extraOral",
    "intraOral",
    "glnglvalFindings",
    "periodontalFindings",
    "mucosalFindings",
    "hardTissuesExamination",
    "provisionalDiaganosis",
    "investigation",
    "finalDiagnosis",
    "emergencyCare",
    "primaryLevelOfPrevention",
    "secondaryLevelOfPrevention",
    "tertiaryLevelOfPrevention",
    "recallAndMaintenance",
    "comprehensiveTreatmentDone",
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