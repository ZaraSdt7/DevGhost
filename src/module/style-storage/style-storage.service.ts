import { Injectable } from '@nestjs/common';
import * as esprima from 'esprima';
import * as fs from 'fs-extra';

@Injectable()
export class CodeAnalyzerService {
  analyzeCode(filePath: string): any {
    const code = fs.readFileSync(filePath, 'utf-8');
    const ast = esprima.parseScript(code);
    return this.extractPatterns(ast);
  }

  private extractPatterns(ast: any): any {
    const patterns = {
      loopPreference: [],
      variableNaming: [],
    };

    function traverse(node: any) {
      if (node.type === 'CallExpression') {
        if (node.callee?.property?.name === 'map') {
          patterns.loopPreference.push('map');
        } else if (node.callee?.property?.name === 'forEach') {
          patterns.loopPreference.push('forEach');
        }
      } else if (node.type === 'VariableDeclarator') {
        patterns.variableNaming.push(node.id.name);
      }
      for (const key in node) {
        if (node[key] && typeof node[key] === 'object') {
          traverse(node[key]);
        }
      }
    }
    traverse(ast);
    return patterns;
  }
}
