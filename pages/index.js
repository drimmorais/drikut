import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box';
import { DrikutMenu, OrkutNostalgicIconSet } from '../src/lib/DrikutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(prop) {
  return (
    <Box>
      <img src={`https://github.com/${prop.githubUser}.png`} style={{ borderRadius: '60px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'drimmorais';
  const favPeople = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']
  return (
    <>
      <DrikutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser}></ProfileSideBar>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 class="smallTitle">Pessoas da Comunidade ({favPeople.length})</h2>
            <ul>
              {favPeople.map((person) => {
                return (
                  <li>
                    <a href={`/users/${person}`} key={person}>
                      <img src={`https://github.com/${person}.png`} />
                      <span>{person}</span>
                    </a>
                  </li>

                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            {/* Comunidades */}
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
