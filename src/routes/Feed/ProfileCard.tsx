import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>💻</Emoji> Profile
      </div>
      <div className="content">
        <div className="avatar">
          <Image src={CONFIG.profile.image} fill alt="" css={{ objectFit: "cover" }} />
        </div>
        <div className="info">
          <div className="name">{CONFIG.profile.name}</div>
          <div className="roles">
            {CONFIG.profile.role.map((role: string, idx: number) => (
              <span className="role-badge" key={idx}>
                {role}
              </span>
            ))}
          </div>
          <div className="bio">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.25rem;
    padding: 1.75rem 1.25rem;
    border-radius: 1.25rem;
    width: 100%;
    text-align: center;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.blue4};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

    .avatar {
      position: relative;
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 1.25rem;
      border: 3px solid ${({ theme }) => theme.colors.cyan9};
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.35rem;
        line-height: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.6rem;
      }
      .roles {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.4rem;
        margin-bottom: 1rem;
      }
      .role-badge {
        font-size: 0.7rem;
        font-weight: 600;
        line-height: 1rem;
        padding: 0.3rem 0.7rem;
        border-radius: 999px;
        color: ${({ theme }) => theme.colors.cyan11};
        background-color: ${({ theme }) => theme.colors.cyan4};
      }
      .bio {
        font-size: 0.85rem;
        line-height: 1.4rem;
        font-style: italic;
        color: ${({ theme }) => theme.colors.blue11};
      }
    }
  }
`
