import simpleIcons from 'simple-icons'
import Cancel from "@material-ui/icons/Cancel";
import { Avatar, Fade, Grid, Hidden, Icon, makeStyles, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@material-ui/core";
import  {skills}  from '../public/data.json'
import { useEffect, useRef, useState } from "react";
import { iconify } from "../public/util";
const wrapper = (sk = []) => sk.map(v => {
    const ic = simpleIcons.get(typeof v === "string" ? iconify(v) : iconify(v.icon)) || {
        title: v,
        hex: '424242',
        component: <Cancel />
    }
    return {
        alt: v.alt || v || ic.title,
        backgroundColor: v.backgroundColor || ('#' + ic.hex),
        icon: ic.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{ic.title}</title>
            <path d={ic.path} fill="white" />
        </svg>,
    }
})

let wrappedSkills = {}
Object.getOwnPropertyNames(skills).forEach(type => {
    wrappedSkills[type] = wrapper(skills[type])

})

let iobj = {}
Object.values(wrappedSkills).forEach(oarr => {
    oarr.forEach(({ backgroundColor, alt }) => {
        iobj[alt] = { backgroundColor }
    })
})

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    },
    skobj: {
        marginBottom: theme.spacing(4)
    },
    avatar: {
        height: theme.spacing(7),
        width: theme.spacing(7),
        padding: theme.spacing(1.5)
    },
    ...iobj
}))

export default function _Skills() {
    
    const classes = useStyles()
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const align = mdDown ? "center" : "flex-end"
    const textAlign = mdDown ? "center" : "right"

    const [animate, setAnimate] = useState(false)
    const animRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting))
                setAnimate(true)
        })
        observer.observe(animRef.current)
        return () => observer.unobserve(animRef)
    }, [])
    return (        
      <>     

                            <Grid container justify="center" alignItems="center"id="skills-bd"  className="skills-area section-padding">
            <Grid item xs={12} lg={6} ref={animRef}  >
                <Typography variant="h2" gutterBottom align="center">
                <h2>Minhas <span>Habilidades</span></h2>
                </Typography>
                <Fade in={animate} style={{ transitionDelay: '100ms' }}>
                    <Grid alignItems={align}>
                        {
                            Object.getOwnPropertyNames(wrappedSkills).map((title, id) =>
                                <div item key={id} className={classes.skobj}>
                                    <Grid container item direction="row"  justify="center">
                                        {
                                            
                                            wrappedSkills[title].map(({ alt, icon }, i) =>
                                                <div item key={i} style={{padding:5}}>
                                                    <Zoom in={animate} style={{ transitionDelay: `${550 * i}ms` }}>
                                                        <Tooltip title={alt.replace("_", " ")} placement="top">
                                                            <Avatar variant="rounded" className={[classes.avatar, classes[alt]]}>
                                                                {icon}
                                                            </Avatar>
                                                        </Tooltip>
                                                    </Zoom>
                                                </div>
                                            )
                                        }
                                    </Grid>
                                </div>
                            )
                        }
                    </Grid>
                </Fade>
            </Grid>
        </Grid>
        </>
    )
}