import type { SVGProps } from 'react';



interface Props extends SVGProps<SVGSVGElement> {
  IconColor?: string;
}


export function GitHubIcon({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"{...other}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
    </svg>
  );
}

export function LinkedInIcon({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...other}>
      <path d="M0 0h24v24H0z" fill="none" />
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5" />
        <path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2c1.6 0 1.6 1.375 1.6 2.875v2" />
      </g>
    </svg>
  )
}



export function EmailIcon({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 193" {...other}>
      <path d="M0 0h256v193H0z" fill="none" />
      <path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" />
      <path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" />
      <path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" />
      <path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" />
      <path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" />
    </svg>
  )
}



export function MenuIcon({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...other} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z" />
    </svg>
  )
}



export function mathsIcons({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...other}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M20 19.88V22l-1.8-1.17l-4.79-9c.66-.21 1.26-.55 1.78-1zM15 7a3 3 0 0 1-3 3h-.44L5.8 20.83L4 22v-2.12L9.79 9c-1.1-1.23-1-3.13.24-4.24C10.57 4.28 11.27 4 12 4V2a1 1 0 0 1 1 1v1.18c1.2.42 2 1.55 2 2.82m-2 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1" />
    </svg>
  )
}



export function RoboticsICons({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...other} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="Blue" d="M4 21v-5q0-.825.588-1.412T6 14h12q.825 0 1.413.588T20 16v5zm5-8q-2.075 0-3.537-1.463T4 8t1.463-3.537T9 3h6q2.075 0 3.538 1.463T20 8t-1.463 3.538T15 13zm-3 6h12v-3H6zm3-8h6q1.25 0 2.125-.875T18 8t-.875-2.125T15 5H9q-1.25 0-2.125.875T6 8t.875 2.125T9 11m.713-2.287Q10 8.425 10 8t-.288-.712T9 7t-.712.288T8 8t.288.713T9 9t.713-.288m6 0Q16 8.426 16 8t-.288-.712T15 7t-.712.288T14 8t.288.713T15 9t.713-.288M12 8" />
    </svg>
  )

}
export function FeaIcon({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...other}>
      <path d="M3 18l6-6 4 4 8-8" />
      <circle cx="3" cy="18" r="2" fill="currentColor" />
      <circle cx="9" cy="12" r="2" fill="currentColor" />
      <circle cx="13" cy="16" r="2" fill="currentColor" />
      <circle cx="21" cy="8" r="2" fill="currentColor" />
    </svg>
  );
}

export function ThermalIcon({ IconColor, ...other }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...other}>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      <path d="M11.5 5.5v7" strokeWidth="2.5" />
      <path d="M17 6h3" strokeWidth="1.5" />
      <path d="M17 10h4" strokeWidth="1.5" />
      <path d="M17 14h3" strokeWidth="1.5" />
    </svg>
  );
}

export function AutomationIcon({ IconColor, ...other }: Props) {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...other}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M14.07 15.23q.18-.585.18-1.23t-.18-1.23l1.49-1.13l-.73-1.27l-1.73.73c-.56-.6-1.3-1.04-2.13-1.23L10.73 8H9.27l-.24 1.86c-.83.19-1.57.63-2.13 1.23l-1.73-.73l-.73 1.27l1.49 1.13q-.18.585-.18 1.23t.18 1.23l-1.49 1.13l.73 1.27l1.73-.73c.56.6 1.3 1.04 2.13 1.23L9.27 20h1.47l.23-1.86c.83-.19 1.57-.63 2.13-1.23l1.73.73l.73-1.27zM10 17c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3" opacity=".3" />
      <path fill="currentColor" d="M10 13c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m8.5-2l1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09zm2.78 3.72L20.5 11l-.78 1.72l-1.72.78l1.72.78l.78 1.72l.78-1.72L23 13.5zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47l-2.5-4.33l-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95l-2.5 4.33l1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47l2.5 4.33l2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94l2.5-4.33l-1.94-1.47c.01-.11.01-.24.01-.36m-1.42 3.64l-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73l-.73-1.27l1.49-1.13q-.18-.585-.18-1.23t.18-1.23l-1.49-1.13l.73-1.27l1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73l.73 1.27l-1.49 1.13q.18.585.18 1.23t-.18 1.23l1.49 1.13z" />
    </svg>


  );
}

export const Icons = {
  LinkedIn: LinkedInIcon,
  Mail: EmailIcon,
  Menu: MenuIcon,
  RoboticsICons: RoboticsICons,
  Fea: FeaIcon,
  Thermal: ThermalIcon,
  Automation: AutomationIcon,
};

