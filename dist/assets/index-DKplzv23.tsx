
import ResearchProject from '@/components/ResearchProject'

const Behavior = () => {
  return (
    <section id="behavior" className="max-w-7xl mx-auto mt-40">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24">BEHAVIOR CHANGE & MODELLING</h2>

    <ResearchProject subSectionTitle="Consumer Spending during the Covid-19 Pandemic"
                  subSectionText="By leveraging extensive geolocated transaction data in South Korea, we analyze the spending behavior of both residents and domestic inbound travelers in Korean cities during the Covid-19 pandemic. We develop a set of econometric models to quantify the joint impact of disease severity and government policy responses (e.g., social distance; economic stimulus) on consumer spending. Through a case study in Jeju, followed by a nationwide analysis, we find that the pandemic had a dampening effect on residents' spending, which remained moderate but persistent. In contrast, travelers' spending showed larger declines during outbreaks but recovered during stable periods. The effects of social distancing mandates and economic stimulus on consumer spending were significant and distinguishable. Despite the overall benefits of these combined policies, certain economic sectors benefited notably while others suffered, resulting in varying economic outcomes during and after the pandemic. These findings underscore the need for robust strategies in crisis management and economic resilience to mitigate the impacts of future pandemics."
                  subSectionAnno={null}
                  subSectionImg="src/assets/images/ResearchArea/behavior/covid_spending.webp"
                  cardList={[
                            {title:"Consumer spending during COVID-19 in a tourism city",
                                  journal:"Annals of Tourism Research",
                                  imageFront:"src/assets/images/ResearchArea/behavior/covid_spending_paper01_front.webp",
                                  imageBack:"src/assets/images/JournalCovers/ATR.webp",
                                  link:"https://doi.org/10.1016/j.annals.2024.103830",
                                  isESI:false

                            },
                            {title:"Unraveling changes of spending behavior in pandemic cities: A nationwide study of South Korea",
                              journal:"Computers, Environment and Urban Systems",
                              imageFront:"src/assets/images/ResearchArea/behavior/covid_spending_paper02_front.webp",
                              imageBack:"src/assets/images/JournalCovers/CEUS.webp",
                              link:"https://doi.org/10.1016/j.compenvurbsys.2024.102181",
                              isESI:false

                        }
                          ]}
                  videoList={[
                              
                  ]}
                  coverCard={null}
                  year={"2022 - 2024"}
                          />

    <ResearchProject subSectionTitle="Changes of Transit Usage Behavior during the Covid-19 Pandemic"
                     subSectionText="Utilizing an extensive and longitudinal smart card dataset from Jeju, South Korea, we present a suite of novel methodologies to analyze the shifting patterns of transit usage among domestic inbound visitors and local inhabitants amid the Covid-19 pandemic. Our study uncovers a long-term decay of visitors' transit usage, hinting that inbound travelers tended to use the transit system more conservatively as the pandemic endured. For local residents, we have developed a Bayesian Online Changepoint Detection (BOCD) framework to pinpoint significant shifts in individual transit usage frequency and assess how such changes were affected by pivotal government policies, such as risk alerts, social distancing mandates, public transit policies, and the relaxation of social distancing measures. Our findings indicate that only a subset of these policies had a marked influence. Specifically, the implementation of risk alerts would cause a surge of 277% to 317% in the number of individuals reducing their use of public transit. Conversely, the relaxation of social distancing measures was associated with a 134% to 155% rise in the number of users who increased their travel frequency."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/behavior/transit.webp"
                     cardList={[
                      {title:"Understanding changing public transit travel patterns of urban visitors during COVID-19: A multi-stage study",
                                      journal:"Travel Behaviour and Society",
                                      imageFront:"src/assets/images/ResearchArea/behavior/transit_paper02_front.webp",
                                      imageBack:"src/assets/images/JournalCovers/TBS.jpg",
                                      link:"https://doi.org/10.1016/j.tbs.2023.100587",
                                      isESI:false
                                },
                      
                                {title:"Assessing effects of pandemic-related policies on individual public transit travel patterns: A Bayesian online changepoint detection based framework",
                                      journal:"Transportation Research Part A: Policy and Practice",
                                      imageFront:"src/assets/images/ResearchArea/behavior/transit_paper01_front.webp",
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
                     subSectionImg="src/assets/images/ResearchArea/behavior/covid_behavior.webp"
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


