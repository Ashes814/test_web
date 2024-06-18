
import ResearchProject from '@/components/ResearchProject'

const Behavior = () => {
  return (
    <section id="behavior" className="max-w-7xl mx-auto mt-40">
    <h2 className="text-2xl sm:text-5xl font-bold text-center mb-24">BEHAVIOR CHANGE & MODELLING</h2>

    <ResearchProject subSectionTitle="Changes of Transit Usage Behavior during the Covid-19 Pandemic"
                     subSectionText="Utilizing an extensive and longitudinal smart card dataset from Jeju, South Korea, we present a suite of novel methodologies to analyze the shifting patterns of transit usage among domestic inbound visitors and local inhabitants amid the Covid-19 pandemic. Our study uncovers a long-term decay of visitors’ transit usage, hinting that inbound travelers tended to use the transit system more conservatively as the pandemic endured. For local residents, we have developed a Bayesian Online Changepoint Detection (BOCD) framework to pinpoint significant shifts in individual transit usage frequency and assess how such changes were affected by pivotal government policies, such as risk alerts, social distancing mandates, public transit policies, and the relaxation of social distancing measures. Our findings indicate that only a subset of these policies had a marked influence. Specifically, the implementation of risk alerts would cause a surge of 277% to 317% in the number of individuals reducing their use of public transit. Conversely, the relaxation of social distancing measures was associated with a 134% to 155% rise in the number of users who increased their travel frequency."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/behavior/transit.png"
                     cardList={[
                      {title:"Understanding changing public transit travel patterns of urban visitors during COVID-19: A multi-stage study",
                                      journal:"Travel Behaviour and Society",
                                      imageFront:"src/assets/images/ResearchArea/behavior/transit_paper02_front.png",
                                      imageBack:"src/assets/images/JournalCovers/TBS.jpg",
                                      link:"https://doi.org/10.1016/j.tbs.2023.100587",
                                      isESI:false
                                },
                      
                                {title:"Assessing effects of pandemic-related policies on individual public transit travel patterns: A Bayesian online changepoint detection based framework",
                                      journal:"Transportation Research Part A: Policy and Practice",
                                      imageFront:"src/assets/images/ResearchArea/behavior/transit_paper01_front.png",
                                      imageBack:"src/assets/images/JournalCovers/TRA.jpg",
                                      link:"https://www.sciencedirect.com/science/article/abs/pii/S096585642400051X?via%3Dihub",
                                      isESI:false
                                }
                              ]}
                      videoList={[
                                  
                      ]}
                      coverCard={null}
                      year={"2022 - 2024"}
                              />

    <ResearchProject subSectionTitle="Impact of Covid-19 on Tourist Travel Behavior"
                     subSectionText="We analyze a large-scale LBS navigation dataset that captures travel activities of domestic inbound visitors in Jeju, Korea in the first nine months of 2020. A collection of regression models is introduced to quantify the dynamic effects of local and national COVID-19 indicators on their travel behavior. Results suggest that behavior of inbound travelers was jointly affected by pandemic severity locally and remotely. The impacts of the pandemic did not diminish over time but produced heterogeneous effects on travels with different trip purposes."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/behavior/covid_behavior.png"
                     cardList={[
                                {title:"Impact of the COVID-19 pandemic on travel behavior: A case study of domestic inbound travelers in Jeju, Korea",
                                      journal:"Tourism Management",
                                      imageFront:"src/assets/images/ResearchArea/behavior/covid_behavior_paper01_front.webp",
                                      imageBack:"src/assets/images/ResearchArea/behavior/covid_behavior_paper01_back.webp",
                                      link:"https://doi.org/10.1016/j.tourman.2022.104533",
                                      isESI:true

                                }
                              ]}
                      videoList={[
                                  
                      ]}
                      coverCard={{
                        coverImage: "src/assets/images/JournalCovers/TM.webp",
                        link: "https://doi.org/10.1016/j.tourman.2022.104533"
                      }}
                      year={"2021 - 2022"}
                              />




    



  </section>
  )
}


export default Behavior


