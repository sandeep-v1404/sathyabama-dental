let dname = "D5";
let num = "Five";

let a = [
    "Chief Complaint",
    "History Of Presenting Illness",
    "Past Medical History",
    "Past Dental History",
    "Personal History",
    "Oral Hygiene Habits",
    "Oral Habits",
    "Number of Sugar Exposures",
    "Cariogenic / Non-Cariogenic diet",
    "General Examination",
    "Extra Oral Examination",
    "Intra Oral Examination",
    "Teeth Present",
    "Occlusal Analysis",
    "Provisional Diagnosis ",
    "Investigations ",
    "Radiographic Interpretation ",
    "Diagnosis",
    "Treatment Plan",
    "Treatment done",
    "Review & Recall",
    "Chief Complaint",
    "History of Presenting illness:",
    "Parental History",
    "Prenatal History",
    "Natal History",
    "Past Medical History",
    "Past Dental history",
    "Past Natal history",
    "Number of Sugar Exposures",
    "Cariogenic / Non-Cariogenic diet",
    "General Examination",
    "Extra Oral Examination",
    "Intra Oral Examination",
    "Teeth present",
    "Clinical Findings",
    "Molar Relationship",
    "Canine relationship",
    "Incisor relationship",
    "Midline",
    "Arch length",
    "Radiographic  investigations:",
    "Diagnosis",
    "Treatment plan",
    "Mode of Management",
    "Study models & Analysis",
    "X-rays",
    "Cephalogram",
    "Photographs",
]
let b = [
    "chiefComplaint",
    "historyOfPresentingIllness",
    "pastMedicalHistory",
    "pastDentalHistory",
    "personalHistory",
    "oralHygieneHabits",
    "oralHabits",
    "numberOfSugarExposures",
    "cariogenicNonCariogenicDiet",
    "generalExamination",
    "extraOralExamination",
    "intraOralExamination",
    "teethPresent",
    "occlusalAnalysis",
    "provisionalDiagnosis",
    "investigations",
    "radiographicInterpretation",
    "diagnosis",
    "treatmentPlan",
    "treatmentDone",
    "reviewRecall",
    "chiefComplaint",
    "historyOfPresentingIllness",
    "parentalHistory",
    "prenatalHistory",
    "natalHistory",
    "pastMedicalHistory",
    "pastDentalHistory",
    "pastNatalHistory",
    "numberOfSugarExposures",
    "cariogenicNonCariogenicDiet",
    "generalExamination",
    "extraOralExamination",
    "intraOralExamination",
    "teethPresent",
    "clinicalFindings",
    "molarRelationship",
    "canineRelationship",
    "incisorRelationship",
    "midline",
    "archLength",
    "radiographicInvestigations",
    "diagnosis",
    "treatmentPlan",
    "modeOfManagement",
    "studyModelsAnalysis",
    "xRays",
    "cephalogram",
    "photographs",
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