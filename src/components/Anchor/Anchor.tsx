import React from 'react'

interface AnchorProps {
  href: string;
  label: string;
}

const Anchor = (props:AnchorProps) => {
  return (
    <a href={props.href}>{props.label}</a>
  )
}

export default Anchor