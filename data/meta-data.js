

const misogyny = {
    id: 'misogyny',
    title: 'Sexism',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../asset/advatar/misogyny.png',
    audio: '.wav',
    action: '.wav',
    description: `
        You enter the quest chamber only to be confronted by a male colleague who is explaining something you are actually an expert in. What do you do?`,
    choices: [{
        id: 'smile',
        description: 'Smile and Nod',
        result: `
            Knowing that you need to safe-guard yourself, you avoid confrontation and smile and nod during his explaination.`,
        scp: 20,
        wp: 0
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your word sword you let out a scream and smack the water cup out his hand and you declare your expertise in the subject.`,
        scp: -20,
        wp: 10
    }, {
        id: 'interject',
        description: 'Stand your ground politely',
        result: `
            First you listen, and then interject into the conversation with your expert opinion, and possibly your crredentials. 
        `,
        scp: -10,
        wp: 50
    }]
};
const gender = {
    id: 'gender',
    title: 'Gender',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '../asset/advatar/gender.png',
    audio: '.wav',
    action: '.wav',
    description: `
        You are working on a project, and while speaking to your gender nonconforming co-worker you use the wron pronoun. What do you do?
    `,
    choices: [{
        id: 'correct',
        description: 'You notice your mistake and say the correct pronoun',
        result: 'Good job. You took accountability but moved on',
        scp: 5,
        wp: 50
    }, {
        id: 'nothing',
        description: 'You do nothing by ignoring it ever happened',
        result: 'Oh no! You chose silence, which only benifits the oppressor',
        scp: 0,
        wp: -50
    }, {
        id: 'sorry',
        description: 'You say sorry, and profusely apologize',
        result: 'Oh no, you tried, but you made it about you forcing your coworker to do the emotional labor of consoling you',
        scp: -20,
        wp: 0
    }]
};
const racism = {
    id: 'racism',
    title: 'Racism',
    map: {
        top: '5%',
        left: '20%'
    },
    image: '../asset/advatar/racism.png',
    audio: '.wav',
    action: '.wav',
    description: `
        You are the hiring manager at a large tech company. You are looking for a new employee to fit into one of your engineering teams. You want more diversity on your team. What do you do?
    `,
    choices: [{
        id: 'blind',
        description: 'You notice your implicit bias is getting in the way, so you as the recruiters to give you blind resumes with blacked out information. ',
        result: 'Good job. You know a white male ex felon statistaclly has a harder time getting callbacked for interviews as a highschool educated black man',
        scp: 10,
        wp: 30
    }, {
        id: 'blame',
        description: 'You do nothing about getting different candidates for your engineering team, but convince your hr coworker to hire a black receptionist',
        result: 'Oh no! You chose to do token diversity!',
        scp: 0,
        wp: -50
    }, {
        id: 'recruit',
        description: 'You start recruiting at Historically Black Colleges',
        result: 'Good job, you know that your hiring process has a bottleneck that does not encourage minorities to apply. Sadly, your boss does not agree, so you have to do all the traveling yourself',
        scp: -20,
        wp: 50
    }]
};

export const adventure = [misogyny, gender, racism];