import { StyleSheet } from '@react-pdf/renderer';

export const ACADEMIC_ACRONYMS = [
    'fpga', 'rtos', 'hdl', 'fpga', 'ai/ml', 'risc-v', 'devops', 'arm-cortex-a', 'arm-cortex-m', 'tsn',
    'i2c', 'spi', 'uart', 'mqtt', 'pcie', 'plc', 'bsp', 'ci/cd', 'pcb', 'containerization', 'virtualization'
];

// These are not CSS; they are plain objects for react-pdf
export const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 10,
        paddingTop: 30,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 30,
        color: '#333',
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40, // Makes it a circle
        marginRight: 20,
    },
    headerText: {
        flex: 1, // Allows text to wrap
    },
    memberName: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    memberPosition: {
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
        marginBottom: 8,
    },
    link: {
        fontSize: 10,
        textAlign: 'center',
        color: 'blue',
        textDecoration: 'underline',
        marginBottom: 2,
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 4,
    },
    experienceItem: {
        marginBottom: 10,
    },
    experienceRole: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    experienceCompany: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#444',
    },
    experiencePeriod: {
        fontSize: 9,
        color: '#777',
        marginBottom: 3,
    },
    descriptionList: {
        marginLeft: 10,
    },
    descriptionItem: {
        fontSize: 10,
        marginBottom: 2,
    },
    skillCategory: {
        marginBottom: 8,
    },
    skillCategoryTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    skillList: {
        marginLeft: 10,
    },
    skillItem: {
        fontSize: 10,
        marginBottom: 2,
    },
    listItem: {
        fontSize: 10,
        marginBottom: 3,
        marginLeft: 10,
    },
    paragraph: {
        fontSize: 10,
        marginBottom: 8, // Space between paragraphs
        lineHeight: 1.4,   // For better readability
    }
});