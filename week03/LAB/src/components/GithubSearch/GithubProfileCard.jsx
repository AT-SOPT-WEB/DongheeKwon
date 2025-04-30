import {
  Card,
  CardButton,
  ProfileDetail,
  ProfileHeader,
  ProfileAvatar,
  FollowBox,
  FollowStats,
  FollowNum,
  FollowBoxWrapper,
  ProfileDesc,
} from "./GithubProfileCard.styles";
export const GithubProfileCard = ({ user, onClose, onOpenProfile }) => {
  return (
    <Card>
      <CardButton onClick={onClose}>X</CardButton>
      <ProfileAvatar src={user.avatar_url} onClick={onOpenProfile} />
      <ProfileDetail>
        <ProfileHeader onClick={onOpenProfile}>{user.name}</ProfileHeader>
        <ProfileDesc>{user.login}</ProfileDesc>
        <ProfileDesc>{user.bio}</ProfileDesc>
      </ProfileDetail>
      <FollowBoxWrapper>
        <FollowBox>
          <FollowStats>Followers</FollowStats>
          <FollowNum>{user.followers}</FollowNum>
        </FollowBox>
        <FollowBox>
          <FollowStats>Following</FollowStats>
          <FollowNum>{user.following}</FollowNum>
        </FollowBox>
      </FollowBoxWrapper>
    </Card>
  );
};
