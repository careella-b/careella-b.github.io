import { ImageSlider } from "../components/index.js";

/**
 * Our demands page displays info about the org's demands
 */

function DemandsPage() {

    return (
        <section>
            <ImageSlider
                topText="ABOUT US"
                bottomText="OUR DEMANDS"
                bgClass="missionBg"
            />
            <div className="container">
                <div className="pt-40 pb-80">
                    <p className="black-color">Our demands seek to change the terms and conditions of conversations about race and racism.</p>
                    <h3 className="black-color">Scrap the Police Crimes and Sentencing Bill</h3>
                    <p className="black-color">(see https://bills.parliament.uk/bills/2839 or https://www.gov.uk/government/publications/police-crime-sentencing-and-courts-bill-2021-factsheets/police-crime-sentencing-and-courts-bill-2021-protest-powers-factsheet   for information about this bill).</p>
                    <p className="black-color">We must defend our right to protest, but we also recognise that this bill could have a disproportionately harmful impact on people vulnerable to police violence.</p>
                    <h3 className="black-color">Scrap the Nationality and Borders Bill</h3>
                    <p className="black-color">(see https://bills.parliament.uk/bills/3023 or https://www.gov.uk/government/publications/the-nationality-and-borders-bill-factsheet/nationality-and-borders-bill-factsheet  for information about this bill).</p>
                    <p className="black-color">Seeking asylum, displacement, and forced migration are not crimes- and no human being is illegal.</p>
                    <h3 className="black-color">Decolonise Education</h3>
                    <p className="black-color">Educational institutions must decolonise education. Teach histories not history. Teach about colonisation and decolonisation. Teach critical race theory. Teach intersectionality. Teach people how to have healthy and safe conversations about race and racism with respect for one another. This should be compulsory in the same way that sex education is compulsory.</p>
                    <h3 className="black-color">Genuine Equality, Diversity, and Inclusion</h3>
                    <p className="black-color">Equality, Diversity, and Inclusion should not be limited to the diversity of bodies in the room- EDI at any institution needs to change the terms and conditions of the conversation. The framing needs to move outside of white-Western centric narratives e.g. in schools, colleges, and universities, this looks like teaching the work produced by POC and not just hiring us to teach white-Western centric framings. We’re changing the terms and conditions of the conversation.</p>
                    <h3 className="black-color">Workplaces must have effective racial sensitivity training</h3>
                    <p className="black-color">No matter what the workplace, everyone should learn the context of racialised actions. Some workplaces have such training- but it is almost always inadequate. For clarification, this does not mean investing more public funds and taxpayer money to the police. It should materialise in the form of funding public projects, survivor-led, specialist, grassroots etc. that help to heal and equip communities.</p>
                    <h3 className="black-color">Institutions, Organisations, Groups, and Individuals, need to be held accountable</h3>
                    <p className="black-color">In particular, media companies, and the government, need to be held accountable for the contribution that they have had in fuelling racism towards ESA communities here in the UK.</p>
                    <p className="black-color">Using ESA faces on Covid-related media has led to the increased racism that we face, as it has produced false narratives about ESA people in the public consciousness. These media strategies have cost us our safety, wellbeing, and our lives. We demand justice. We want an apology and a commitment to protect Asian lives. </p>
                    <p className="black-color">The government must apologise for a lack of inaction on tackling racism towards ESA people. You have a duty to protect Asian lives here in the UK. </p>
                    <p className="black-color">Institutions, organisations, groups, and individuals who perpetrate false narratives, racism, and harm towards ESA people must be held accountable- sorry is not good enough, the harm is already done. We want to know what preventive measures you have in place to protect Asian lives. </p>
                    <p className="black-color"><i>What procedures do you have in place to deal with racism within your institution/organisation/group? </i></p>
                    <p className="black-color"><i>What are you doing to make sure that ESA people are represented, included, and part of the framing of the terms and conditions of the conversation?</i></p>
                    <h3 className="black-color">Investment into mental health support services, and in particular, those mental health services that support people facing racial trauma</h3>
                    <p className="black-color">The harms that prisons and policing that continue to inflict harm on ESA</p>
                    <p className="black-color">Mental health services are already strained and need more funding. ESA mental health has been impacted on by increased amounts of racism since the Coronavirus Pandemic. There was already a lack of understanding and a lack of provision of mental health services for ESA communities, and in general for POC. We need mental health support for ongoing racial traumas. We need safe spaces for healing. We need answers to the question and challenge of: how do we heal from racial trauma when it is ongoing? This means that we need a better understanding of chronic trauma rather than treating trauma as acute incidents. </p>
                </div>
            </div>
        </section>
    )
}


export { DemandsPage };