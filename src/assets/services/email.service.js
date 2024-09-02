import { storageService } from "./async-storage.service";
import { saveToStorage, loadFromStorage } from "./util.service";

// Sample email model:
// const email = {
//  id: 'e101',
//  subject: 'Miss you!',
//  body: 'Would love to catch up sometimes',
//  isRead: false,
//  isStared: false,
//  sentAt: 1551133930594,
//  removedAt: null, // for later use
//  from: 'momo@momo.com',
//  to: 'user@appsus.com'
// }

export const emailService = {
    query,
    remove,
    getById,
    save,
    getDefaultFilter
};

const STORAGE_KEY = 'emails';

_createEmails();

async function query(filterBy) {
    let emails = await storageService.query(STORAGE_KEY);

    if (filterBy) {
        let { subject = '', body = '', to = 'user@appsus.com', from = '' } = filterBy;

        emails = emails.filter(email =>
            email.subject.toLowerCase().includes(subject.toLowerCase()) &&
            email.body.toLowerCase().includes(body.toLowerCase()) &&
            email.to.toLowerCase().includes(to.toLowerCase()) &&
            email.from.toLowerCase().includes(from.toLowerCase())
        );
    }
    return emails;
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function save(email) {
    if (email.id) {
        return storageService.put(STORAGE_KEY, email)
    } else {
        return storageService.post(STORAGE_KEY, email)
    }
}

function getDefaultFilter() {
    return {
        subject: '',
        body: '',
        to: '',
        from: ''
    }
}

function _createEmails() {
    let emails = loadFromStorage(STORAGE_KEY);
    if(emails && emails.length > 0) return;

    emails = [
        {
            id: 'e102',
            subject: 'Reminder: Project Meeting Today!',
            body: 'Hi Team, Just a friendly reminder that our project meeting is today at 2 PM. Don\'t forget to come prepared to discuss the next steps. See you there!',
            isRead: true,
            isStared: true,
            sentAt: 1551137530594,
            removedAt: null,
            from: 'project.manager@company.com',
            to: 'user@appsus.com'
        },
        {
            id: 'e103',
            subject: 'Happy Birthday!',
            body: 'Dear [User Name], Wishing you a very happy birthday! Hope you have a wonderful day filled with joy and laughter. Best,  [Your Name]',
            isRead: false,
            isStared: false,
            sentAt: 1551141130594,
            removedAt: null,
            from: 'user@appsus.com',
            to: 'security@appsus.com'
        },
        {
            id: 'e104',
            subject: 'Important: Update Required on Your Account',
            body: 'Dear user@appsus.com, This is an automated message to inform you that there is an update required on your account for security purposes. Please follow the link below to update your information. [Link to update page]. We appreciate your cooperation. Sincerely, The AppSus Team',
            isRead: false,
            isStared: false,
            sentAt: 1551144730594,
            removedAt: null,
            from: 'security@appsus.com',
            to: 'user@appsus.com'
        },
        {
             id: 'e101',
             subject: 'Miss you!',
             body: 'Would love to catch up sometimes',
             isRead: false,
             isStared: false,
             sentAt: 1551133930594,
             removedAt: null,
             from: 'momo@momo.com',
             to: 'user@appsus.com'
        }
    ]
    saveToStorage(STORAGE_KEY, emails)
}