import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="top">💻 Profile</div>
      <div className="mid">
        <div className="wrapper">
          <div className="avatar">
            <Image
              src={CONFIG.profile.image}
              fill
              css={{ objectFit: "cover" }}
              alt="profile_image"
            />
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
      </div>
    </StyledWrapper>
  )
}

export default MobileProfileCard

const StyledWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1.25rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.blue4};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    > .wrapper {
      display: flex;
      gap: 1rem;
      align-items: center;
      > .avatar {
        position: relative;
        flex-shrink: 0;
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid ${({ theme }) => theme.colors.cyan9};
      }
      > .info {
        height: fit-content;
        > .name {
          font-size: 1.15rem;
          line-height: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        > .roles {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 0.5rem;
        }
        > .roles .role-badge {
          font-size: 0.65rem;
          font-weight: 600;
          line-height: 0.9rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          color: ${({ theme }) => theme.colors.cyan11};
          background-color: ${({ theme }) => theme.colors.cyan4};
        }
        > .bio {
          font-size: 0.8rem;
          line-height: 1.2rem;
          font-style: italic;
          color: ${({ theme }) => theme.colors.blue11};
        }
      }
    }
  }
`
