import React from 'react'
import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box';
import { DrikutMenu, OrkutNostalgicIconSet, DrikutProfileSidebarMenuDefault } from '../src/lib/DrikutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(prop) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${prop.githubUser}.png`} style={{ borderRadius: '60px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${prop.githubUser}`}>@{prop.githubUser}</a>
        <hr />
      </p>
      <DrikutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'drimmorais';
  const boxes = ['Pessoas da Comunidade', 'Comunidades']
  const favPeople = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']
  const [comunidades, setCommunity] = React.useState([{
    id: '1254411223645411232',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  console.log(comunidades)
  return (
    <>
      <DrikutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser}></ProfileSideBar>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              console.log(dadosDoForm.get('title'))
              console.log(dadosDoForm.get('image'))
              const newCommunit = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              setCommunity([...comunidades, newCommunit])
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title" aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text" />
              </div>
              <div>
                <input placeholder="Coloque uma URL para usar de capa"
                  name="image" aria-label="Coloque uma URL para usar de capa" />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          {/* <ProfileRelationsBoxWrapper >
            <h2 class="smallTitle">Pessoas da Comunidade ({favPeople.length})</h2>
            <ul>
              {favPeople.map((person) => {
                return (
                  <li key={person}>
                    <a href={`/users/${person}`} >
                      <img src={`https://github.com/${person}.png`} />
                      <span>{person}</span>
                    </a>
                  </li>

                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 class="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item.title}`} key={item.id}>
                      <img src={item.image} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper> */}

          {boxes.map((box) => {
            return (
              <ProfileRelationsBoxWrapper>
                <h2 class="smallTitle"> {box} ({box === 'Pessoas da Comunidade' ? favPeople.length : comunidades.length})</h2>
                {box === 'Pessoas da Comunidade' ? <ul>
                  {favPeople.map((person) => {
                    return (
                      <li key={person}>
                        <a href={`/users/${person}`} >
                          <img src={`https://github.com/${person}.png`} />
                          <span>{person}</span>
                        </a>
                      </li>

                    )
                  })}
                </ul> :
                  <ul>
                    {comunidades.map((item) => {
                      return (
                        <li>
                          <a href={`/users/${item.title}`} key={item.id}>
                            <img src={item.image} />
                            <span>{item.title}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                }

              </ProfileRelationsBoxWrapper>
            )
          })}

        </div>
      </MainGrid>
    </>
  )
}
