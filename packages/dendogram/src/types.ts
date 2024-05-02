import { AriaAttributes, FunctionComponent, MouseEvent } from 'react'
import { HierarchyNode } from 'd3-hierarchy'
import { SpringValues } from '@react-spring/web'
import { Box, Dimensions, MotionProps, Theme, PropertyAccessor } from '@nivo/core'

export type Layout = 'top-to-bottom' | 'right-to-left' | 'bottom-to-top' | 'left-to-right'

export type LayerId = 'links' | 'nodes' | 'labels'

export interface DefaultDatum {
    id: string
    value?: number
    children?: DefaultDatum[]
}

export interface HierarchyDendogramNode<Datum> extends HierarchyNode<Datum> {
    uid: string | undefined
}

export interface HierarchyDendogramLink<Datum> {
    source: HierarchyDendogramNode<Datum>
    target: HierarchyDendogramNode<Datum>
}

export interface ComputedNode<Datum extends object> {
    uid: string
    id: string
    data: Datum
    pathComponents: string[]
    depth: number
    height: number
    x: number
    y: number
}

export interface ComputedLink<Datum extends object> {
    id: string
    source: ComputedNode<Datum>
    target: ComputedNode<Datum>
}

export interface NodeComponentProps<Datum extends object> {
    node: ComputedNode<Datum>
    isInteractive: boolean
    onMouseEnter?: NodeMouseEventHandler<Datum>
    onMouseMove?: NodeMouseEventHandler<Datum>
    onMouseLeave?: NodeMouseEventHandler<Datum>
    onClick?: NodeMouseEventHandler<Datum>
    tooltip?: NodeTooltip<Datum>
    animatedProps: SpringValues<{
        x: number
        y: number
    }>
}
export type NodeComponent<Datum extends object> = FunctionComponent<NodeComponentProps<Datum>>

export interface NodeTooltipProps<Datum extends object> {
    node: ComputedNode<Datum>
}
export type NodeTooltip<Datum extends object> = FunctionComponent<NodeTooltipProps<Datum>>

export type NodeMouseEventHandler<Datum extends object> = (
    node: ComputedNode<Datum>,
    event: MouseEvent
) => void

export interface DendogramDataProps<Datum extends object> {
    data: Datum
}

export interface CommonProps<Datum extends object> extends MotionProps {
    margin: Box

    layout: Layout
    identity: PropertyAccessor<Datum, string>

    theme: Theme

    isInteractive: boolean
    onNodeMouseEnter: NodeMouseEventHandler<Datum>
    onNodeMouseMove: NodeMouseEventHandler<Datum>
    onNodeMouseLeave: NodeMouseEventHandler<Datum>
    onNodeClick: NodeMouseEventHandler<Datum>
    nodeTooltip: NodeTooltip<Datum>

    role: string
    renderWrapper: boolean
    ariaLabel: AriaAttributes['aria-label']
    ariaLabelledBy: AriaAttributes['aria-labelledby']
    ariaDescribedBy: AriaAttributes['aria-describedby']
}

export type DendogramSvgProps<Datum extends object> = DendogramDataProps<Datum> &
    Dimensions &
    Partial<CommonProps<Datum>> & {
        layers?: LayerId[]
        nodeComponent?: NodeComponent<Datum>
    }

export type ResponsiveDendogramSvgProps<Datum extends object> = Omit<
    DendogramSvgProps<Datum>,
    'height' | 'width'
>