export function handleDepartment(department) {
    switch (department) {
        case "D0":
            return "OMRD Department";
        case "D1":
            return "Department of Periodontia";
        case "D2":
            return "Department of Oral & Maxillo Facial Surgery";
        case "D3":
            return "Department of Conservative dentistry & Endodontia";
        case "D4":
            return 'Department of Prosthodontia';
        case "D5":
            return "Department of Pedodontia";
        case "D6":
            return "Department of Orthodontia";
        case "D7":
            return "Department of Public Health dentistry";
        case "D8":
            return "Department of Oral & Maxillo Facial Pathology";
        default:
            return department;
    }
}
