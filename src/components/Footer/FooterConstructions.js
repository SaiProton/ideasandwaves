import { FooterLinkItems, WaveSection, Wave } from "./FooterElements";

export const FooterSection = ({ data }) => {
  return(
    <FooterLinkItems>
      <h2>{data.header}</h2>
      {data.links.map((item, index) => {
        return(
          <a key={index} href={item.href}>{item.name}</a>
        )
      })}
    </FooterLinkItems>
  )
}

export const FooterWave = () => {
  return(
    <WaveSection>
      <Wave/>
      <Wave/>
      <Wave/>
      <Wave/>
    </WaveSection>
  )
}