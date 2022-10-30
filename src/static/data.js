const getData = (type) => {
    const data = [
        {   id:1,
            name: 'EDUCATION',
            events: [
                {   
                    id:1,
                    date: '2012',
                    explanation: 'I Graduated From Basic Education High School No.1 Maung Daw With Distinction In Biology.'
                },
                {
                    id:2,
                    date: '2018-2022',
                    explanation: 'Because of Some discriminatory laws in my country, we are not allowed to sturdy higher education. So after waiting for a long time I finally took admission in A university (CBIU) in 2018. I will complete my BSc in 2022 with computer science major Insha Allah.'
                }
               
            ]
        },
        {
            id:2,
            name:'WORK EXPERIENCE',
            events:[
                {
                    id:1,
                    date:"2013-2016",
                    explanation:'The jobs I did in the past have nothing to do with my current field. In simple term I am a noob in this field. I just worked as a teacher in our local Middle School for 4 years.'
                },
                
            ]
        }

    ]
    const skills = [
        {
            id:1,
            name:'Frontend Development',
            explanation:'I have a good not best understanding of CSS and React  and other related libraries such as React Redux or Redux Toolkits.'
        },
        {
            id:2,
            name:'Mobile App Development',
            explanation:'Since I am a fan of React it is natural to develop Mobile Apps by using React Native. I can devlop Android Application in React Native. '
        },
        {
            id:3,
            name:"Web API Development",
            explanation:'This is the thing I love the most. I love developing Web APIs in Javascript and have good understanding of Express, Mongodb, Mongoose and things like Authentication and Inter API communication.  '
        }
    ]
    if(type==='section'){
        return data
    }
    if(type==='skills'){
        return skills
    }
    return [];
    
    
}
export default getData